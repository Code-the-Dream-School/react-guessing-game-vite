const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

let messageHistory = [];
const rooms = new Map(); // Track users per room

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join_room", ({ username, room }) => {
    socket.join(room);
    socket.username = username;
    socket.room = room;

    if (!rooms.has(room)) rooms.set(room, new Set());
    rooms.get(room).add(username);

    socket.emit(
      "message_history",
      messageHistory.filter((msg) => msg.room === room)
    );
    io.to(room).emit("user_list", Array.from(rooms.get(room)));
    socket.broadcast
      .to(room)
      .emit("user_joined", `${username} joined the chat`);
  });

  socket.on("send_message", (data) => {
    const messageData = {
      id: Date.now(), // Unique ID for deletion
      username: socket.username,
      message: data.message,
      timestamp: new Date().toLocaleTimeString(),
      room: socket.room,
      readBy: [socket.username], // Track who read it
    };
    messageHistory.push(messageData);
    io.to(socket.room).emit("receive_message", messageData);
  });

  socket.on("delete_message", (messageId) => {
    messageHistory = messageHistory.filter((msg) => msg.id !== messageId);
    io.to(socket.room).emit("message_deleted", messageId);
  });

  socket.on("mark_read", ({ messageId }) => {
    const msg = messageHistory.find((m) => m.id === messageId);
    if (msg && !msg.readBy.includes(socket.username)) {
      msg.readBy.push(socket.username);
      io.to(socket.room).emit("update_read", { messageId, readBy: msg.readBy });
    }
  });

  socket.on("typing", () => {
    socket.broadcast.to(socket.room).emit("user_typing", socket.username);
  });

  socket.on("disconnect", () => {
    if (socket.username && socket.room) {
      rooms.get(socket.room).delete(socket.username);
      io.to(socket.room).emit("user_list", Array.from(rooms.get(socket.room)));
      socket.broadcast
        .to(socket.room)
        .emit("user_left", `${socket.username} left the chat`);
    }
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3001, () => {
  console.log("Server is running 👻");
});

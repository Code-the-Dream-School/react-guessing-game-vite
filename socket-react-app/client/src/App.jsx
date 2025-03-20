import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typingUser, setTypingUser] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [users, setUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const joinRoom = () => {
    if (username && room) {
      socket.emit("join_room", { username, room });
      setIsJoined(true);
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", { message });
      setMessage("");
    }
  };

  const deleteMessage = (messageId) => {
    socket.emit("delete_message", messageId);
  };

  const markAsRead = (messageId) => {
    socket.emit("mark_read", { messageId });
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    socket.emit("typing");
  };

  useEffect(() => {
    socket.on("message_history", (history) => {
      setMessages(history);
    });

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("message_deleted", (messageId) => {
      setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
    });

    socket.on("update_read", ({ messageId, readBy }) => {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === messageId ? { ...msg, readBy } : msg))
      );
    });

    socket.on("user_joined", (msg) => {
      setMessages((prev) => [...prev, { message: msg, system: true }]);
    });

    socket.on("user_left", (msg) => {
      setMessages((prev) => [...prev, { message: msg, system: true }]);
    });

    socket.on("user_typing", (username) => {
      setTypingUser(username);
      setTimeout(() => setTypingUser(""), 2000);
    });

    socket.on("user_list", (userList) => {
      setUsers(userList);
    });

    return () => {
      socket.off("receive_message");
      socket.off("message_deleted");
      socket.off("update_read");
      socket.off("user_joined");
      socket.off("user_left");
      socket.off("user_typing");
      socket.off("user_list");
      socket.off("message_history");
    };
  }, []);

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      {!isJoined ? (
        <div className="join-container">
          <h1>Chat</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinRoom}>Join</button>
        </div>
      ) : (
        <div className="chat-container">
          <header>
            <h2>{room}</h2>
            <div className="header-actions">
              <span>{username}</span>
              <button
                className="mode-toggle"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </header>
          <div className="sidebar">
            <h3>Users ({users.length})</h3>
            <ul>
              {users.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
          </div>
          <div className="message-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.system ? "system" : ""} ${
                  msg.username === username ? "self" : ""
                }`}
                onClick={() => !msg.system && markAsRead(msg.id)}
              >
                {!msg.system && (
                  <span className="username">{msg.username}</span>
                )}
                <p>{msg.message}</p>
                {!msg.system && (
                  <div className="message-actions">
                    <span className="timestamp">{msg.timestamp}</span>
                    {msg.username === username && (
                      <button
                        className="delete-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteMessage(msg.id);
                        }}
                      >
                        ✕
                      </button>
                    )}
                    <span className="read-status">
                      {msg.readBy.length > 1
                        ? `Read by ${msg.readBy.length}`
                        : ""}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          {typingUser && <p className="typing">{typingUser} is typing...</p>}
          <div className="input-container">
            <input
              placeholder="Message"
              value={message}
              onChange={handleTyping}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

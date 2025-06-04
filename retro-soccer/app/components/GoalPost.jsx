// // components/GoalPost3D.jsx
// import React from "react";

// export default function GoalPost3D() {
//   return (
//     <div
//       // Parent container sets perspective for 3D effect.
//       className="absolute"
//       style={{
//         top: "20px", // Position near the top (next to the white goal line)
//         left: "50%",
//         transform: "translateX(-50%)",
//         perspective: "600px", // Adjust perspective (lower value = stronger 3D effect)
//         zIndex: 10, // Ensure goal appears above the field line if needed.
//       }}
//     >
//       {/* Goal frame rotated to give a 3D view */}
//       <div
//         style={{
//           position: "relative",
//           width: "200px",
//           height: "100px",
//           transformStyle: "preserve-3d",
//           transform: "rotateX(75deg)", // Adjust angle for your desired view
//         }}
//       >
//         {/* Crossbar */}
//         <div
//           style={{
//             position: "absolute",
//             width: "200px",
//             height: "8px",
//             background: "white",
//             top: 0,
//             left: 0,
//           }}
//         />

//         {/* Left Post */}
//         <div
//           style={{
//             position: "absolute",
//             width: "8px",
//             height: "100px",
//             background: "white",
//             left: 0,
//             bottom: 0,
//           }}
//         />

//         {/* Right Post */}
//         <div
//           style={{
//             position: "absolute",
//             width: "8px",
//             height: "100px",
//             background: "white",
//             right: 0,
//             bottom: 0,
//           }}
//         />

//         {/* Net Panel: pushed back with a tilt so it appears behind the posts */}
//         <div
//           style={{
//             position: "absolute",
//             width: "200px",
//             height: "80px",
//             top: "8px",
//             left: 0,
//             transform: "translateZ(-5px) rotateX(85deg)",
//             transformOrigin: "top",
//             background: `
//               repeating-linear-gradient(
//                 45deg,
//                 rgba(255, 255, 255, 0.3) 0 3px,
//                 transparent 3px 6px
//               ),
//               repeating-linear-gradient(
//                 -45deg,
//                 rgba(255, 255, 255, 0.3) 0 3px,
//                 transparent 3px 6px
//               )
//             `,
//             backgroundSize: "10px 10px",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

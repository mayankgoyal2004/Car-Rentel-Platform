const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const http = require("http");
const { Server } = require("socket.io");
const connectDb = require("./Config/db.js");
const adminRoutes = require("./routes/adminRoutes.js");
const path = require("path");
const Message = require("./models/messageModel.js");
require("dotenv").config();

const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

// Routes
app.use("/admin", adminRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Seeder
const seeder = require("./Config/sedder.js");

// HTTP server
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: process.env.CORS_ORIGIN, methods: ["GET", "POST"] },
});

let onlineUsers = {};

io.on("connection", (socket) => {
  socket.on("user-connected", (userId) => {
    onlineUsers[userId] = socket.id;
  });

  socket.on("send-message", async ({ senderId, receiverId, message }) => {
    const newMessage = new Message({
      sender: senderId,
      receiver: receiverId,
      message,
    });
    await newMessage.save();

    const receiverSocketId = onlineUsers[receiverId];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("receive-message", { senderId, message });
    }
  });

  socket.on("typing", ({ senderId, receiverId }) => {
    const receiverSocketId = onlineUsers[receiverId];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("typing", { senderId });
    }
  });

  socket.on("disconnect", () => {
    for (const userId in onlineUsers) {
      if (onlineUsers[userId] === socket.id) delete onlineUsers[userId];
    }
  });
});

connectDb()
  .then(() => {
    seeder.superAdmin();
    server.listen(port, () => {
      console.log(`Server running on ${process.env.CORS_ORIGIN}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
  });
app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Car Rental API | Engine Status</title>

  <style>
    :root {
      --primary: #facc15;
      --bg: #0a0a0a;
      --card-bg: rgba(20, 20, 20, 0.85);
    }

    * {
      box-sizing: border-box;
    }

    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* Road Background */
    .road {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
        url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920');
      background-size: cover;
      background-position: center;
      z-index: -1;
    }

    .container {
      text-align: center;
      padding: 3rem;
      background: var(--card-bg);
      border: 1px solid rgba(250, 204, 21, 0.25);
      border-radius: 26px;
      backdrop-filter: blur(18px);
      box-shadow: 0 30px 80px rgba(0,0,0,0.6);
      max-width: 420px;
      animation: slideUp 0.8s ease;
    }

    /* 🚗 Car Logo Animation */
  .car-logo {
  width: 140px;
  height: 140px;
  margin: 0 auto 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 96px;        /* 🔥 INCREASE ICON SIZE */
  line-height: 1;

  animation: drive 3s ease-in-out infinite;
  filter: drop-shadow(0 0 25px rgba(250,204,21,0.35));
}

    .car-logo img {
      width: 100%;
      display: block;
    }

    @keyframes drive {
      0%   { transform: translateX(-6px); }
      50%  { transform: translateX(6px); }
      100% { transform: translateX(-6px); }
    }

    h1 {
      font-size: 1.9rem;
      margin: 0;
      letter-spacing: 2px;
      font-weight: 900;
      text-transform: uppercase;
    }

    .brand {
      color: var(--primary);
    }

    p {
      margin-top: 10px;
      opacity: 0.65;
      font-weight: 300;
    }

    .stats {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.12);
    }

    .stat-item span {
      display: block;
      font-size: 0.7rem;
      text-transform: uppercase;
      opacity: 0.5;
    }

    .stat-item strong {
      font-family: monospace;
      font-size: 1.1rem;
      color: var(--primary);
    }

    .btn {
      display: inline-block;
      margin-top: 2.5rem;
      padding: 12px 32px;
      background: var(--primary);
      color: black;
      font-weight: 800;
      text-decoration: none;
      border-radius: 10px;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 1px;
      transition: all 0.3s;
    }

    .btn:hover {
      background: white;
      transform: translateY(-3px);
      box-shadow: 0 15px 30px rgba(250,204,21,0.35);
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>

<body>
  <div class="road"></div>

  <div class="container">

    <!-- 🚗 Car Logo -->
    <div class="car-logo">
     🚗
    </div>

    <h1><span class="brand">CAR</span> RENTAL</h1>
    <p>System Engine: <span style="color:#4ade80;">Running Smoothly</span></p>

   
    <a href="https://carrental.vibrantick.org/" class="btn">
      Go To Website
    </a>
  </div>
</body>
</html>
  `);
});

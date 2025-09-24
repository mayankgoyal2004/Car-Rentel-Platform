const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const http = require("http");
const { Server } = require("socket.io");
const connectDb = require("./Config/db.js");
const adminRoutes = require("./routes/adminRoutes.js");
const path = require("path");
const Message = require("./models/messageModel.js"); // Import Message model

const port = 7777;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

// Routes
app.use("/admin", adminRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Seeder
const seeder = require("./Config/sedder.js");
const { authUser } = require("./middlewares/auth.js");

// HTTP server
const server = http.createServer(app);

// Socket.IO
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

let onlineUsers = {};

io.on("connection", (socket) => {
  console.log("New client connected: ", socket.id);

  socket.on("user-connected", (userId) => {
    onlineUsers[userId] = socket.id;
    console.log("Online Users:", onlineUsers);
  });

  socket.on("send-message", async ({ senderId, receiverId, message }) => {
    console.log(`Message from ${senderId} to ${receiverId}: ${message}`);

    const newMessage = new Message({ sender: senderId, receiver: receiverId, message });
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

  // Disconnect
  socket.on("disconnect", () => {
    console.log("Client disconnected: ", socket.id);
    for (const userId in onlineUsers) {
      if (onlineUsers[userId] === socket.id) delete onlineUsers[userId];
    }
    console.log("Online Users after disconnect:", onlineUsers);
  });
});


// Connect DB and start server
connectDb()
  .then(() => {
    seeder.superAdmin();
    server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
  });

const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formatMessage = require("./utils/messages");
const cors = require('cors');

require("dotenv").config();

const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;
const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;


mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@feedbackdata.czmwps7.mongodb.net/`,)
  .then(() => {
    console.log('Connected to MongoDB database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.json());
app.use('/api', require('./routes/contacts.js'));

const botName = "SociaLink Admin";

// Run when client connects
io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to SociaLink!"));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

server.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}/`));
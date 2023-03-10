const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users");
const videoRoutes = require("./routes/videos");
const commentRoutes = require("./routes/comments");
const authRoutes = require("./routes/auth");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/auths", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to Server");
});

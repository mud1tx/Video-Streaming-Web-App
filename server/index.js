const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users");
const videoRoutes = require("./routes/videos");
const commentRoutes = require("./routes/comments");

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

app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.listen(8800, () => {
  connect();
  console.log("Connected to Server");
});

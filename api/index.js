// import express from 'express'
// import cors from 'cors'
// import mongoos from 'mongoose'

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8800;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Successfully estblished MongoDB connection")
});

//const workoutRouter = require('./routes/workout');
const userRouter = require('./routes/user')

//app.use('/workout', workoutRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});






// app.use(express.json());
// app.use(cookieParser());



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../client/public/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const upload = multer({ storage });

// app.post("/api/upload", upload.single("file"), function (req, res) {
//   const file = req.file;
//   res.status(200).json(file.filename);
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);

// app.listen(8800, () => {
//   console.log("Connected!");
// });
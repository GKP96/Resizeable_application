"use strict";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import UserRouter from "./routes/UserRouter.js";
import CountRouter from "./routes/CountRouter.js"

const options = [
  cors({
      origin: '*',
      methods: '*',
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
  })
];

app.use(options);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/users", UserRouter);
app.use("/count", CountRouter);
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    status: err.statusCode || 500,
    success: false,
  });
});
let GautamUrl =
  "mongodb+srv://Gautama:Gaunik%401234@cluster1.txuuzz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

mongoose.connect(GautamUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Database Connected successfully");
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "build/index.html"))
);
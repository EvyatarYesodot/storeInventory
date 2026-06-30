import express from "express";
import { config } from "./config/config.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json);

connectDB();

app.get("/", (_req, res) => {
  res.send("Server is Running with DB connection!");
});

app.listen(config.port, () => {
  console.log(`Server is running: http://localhost:${config.port}`);
});

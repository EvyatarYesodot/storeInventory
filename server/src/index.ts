import express from "express";
import { config } from "./config/config.js";

const app = express();

app.get("/", (_req, res) => {
  res.send("Inventory Server is Running!");
});

app.listen(config.port, () => {
  console.log(`Server is running: http://localhost:${config.port}`);
});

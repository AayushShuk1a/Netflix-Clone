import express from "express";
import dotenv from "dotenv";
import connection from "./database/db.js";

dotenv.config();

const app = express();

app.listen("8800", () => {
  console.log("Server is Running");
});

connection();

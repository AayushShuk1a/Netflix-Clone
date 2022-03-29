import express from "express";
import dotenv from "dotenv";
import connection from "./database/db.js";
import Router from "./Router/Routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", Router);

app.listen("8800", () => {
  console.log("Server is Running");
});

connection();

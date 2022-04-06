import express from "express";
import dotenv from "dotenv";
import connection from "./database/db.js";
import Router from "./Router/UserRoutes.js";
import MovieRoute from "./Router/MovieRoutes.js";
import ListRoute from "./Router/ListRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", Router);
app.use("/api/movie", MovieRoute);
app.use("/api/list", ListRoute);

app.listen("8800", () => {
  console.log("Server is Running");
});

connection();

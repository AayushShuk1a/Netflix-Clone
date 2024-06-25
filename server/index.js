import express from "express";
import dotenv from "dotenv";
import connection from "./database/db.js";
import Router from "./Router/UserRoutes.js";
import MovieRoute from "./Router/MovieRoutes.js";
import ListRoute from "./Router/ListRoute.js";
import cors from "cors";
import BodyParser from "body-parser";
import path from "path";

dotenv.config();

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

app.use(express.json());

const __dirname = path.resolve();

const PORT = process.env.PORT || 8800;

app.use("/", Router);
app.use("/api/movie", MovieRoute);
app.use("/api/list", ListRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is Running");
});

connection();

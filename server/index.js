import express from "express";
import dotenv from "dotenv";
import connection from "./database/db.js";
import Router from "./Router/UserRoutes.js";
import MovieRoute from "./Router/MovieRoutes.js";
import ListRoute from "./Router/ListRoute.js";
import cors from "cors";

dotenv.config();

const app = express();


app.use(cors());

app.use(express.json());



const PORT = process.env.PORT || 8800;

app.use("/", Router);
app.use("/api/movie", MovieRoute);
app.use("/api/list", ListRoute);


app.listen(PORT, () => {
  console.log("Server is Running");
});

connection();

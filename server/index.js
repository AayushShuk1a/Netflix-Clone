import express from "express";
import dotenv from "dotenv";
import connection from "./database/db.js";
import Router from "./Router/UserRoutes.js";
import MovieRoute from "./Router/MovieRoutes.js";
import ListRoute from "./Router/ListRoute.js";
import cors from "cors";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "https://netflix-clone-client-tan.vercel.app",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://netflix-clone-client-tan.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});



const PORT = process.env.PORT || 8800;

app.use("/", Router);
app.use("/api/movie", MovieRoute);
app.use("/api/list", ListRoute);


app.listen(PORT, () => {
  console.log("Server is Running");
});

connection();

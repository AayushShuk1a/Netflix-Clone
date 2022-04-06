import express from "express";

import { verifyToken } from "../VerifyToken.js";
import {
  AddMovie,
  UpdateMovie,
  DeleteMovie,
  SingleMovie,
  RandomMovie,
  AllMovies,
} from "../Controller/MovieController.js";

const Router = express.Router();

Router.post("/", verifyToken, AddMovie);

Router.put("/:id", verifyToken, UpdateMovie);

Router.delete("/:id", verifyToken, DeleteMovie);

Router.get("/find/:id", verifyToken, SingleMovie);

Router.get("/random", verifyToken, RandomMovie);

Router.get("/", verifyToken, AllMovies);

export default Router;

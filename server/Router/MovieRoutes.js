import express from "express";

import { verifyToken } from "../VerifyToken.js";
import {
  AddMovie,
  UpdateMovie,
  DeleteMovie,
} from "../Controller/MovieController.js";

const Router = express.Router();

Router.post("/", verifyToken, AddMovie);

Router.put("/:id", UpdateMovie);

Router.delete("/:id", DeleteMovie);

export default Router;

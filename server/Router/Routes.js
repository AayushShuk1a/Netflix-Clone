import express from "express";
import {
  RegisterPerson,
  LoginPerson,
  UpdateUser,
  DeleteUser,
  SingleUser,
  AllUsers,
  UserStats,
} from "../Controller/UserController.js";
import { verifyToken } from "../VerifyToken.js";

const Router = express.Router();

//Auth
Router.post("/api/auth/register", RegisterPerson);

Router.post("/api/auth/login", LoginPerson);

//User Update
Router.put("/api/users/:id", verifyToken, UpdateUser);

//User Delete
Router.delete("/api/users/:id", verifyToken, DeleteUser);

//get User
Router.get("/api/users/:id", SingleUser);
Router.get("/api/users", verifyToken, AllUsers);

//User Stats
Router.get("/api/stats", UserStats);

export default Router;

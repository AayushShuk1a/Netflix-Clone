import express from "express";
import {
  RegisterPerson,
  LoginPerson,
  UpdateUser,
} from "../Controller/UserController.js";
import { verifyToken } from "../VerifyToken.js";

const Router = express.Router();

//Auth
Router.post("/api/auth/register", RegisterPerson);

Router.post("/api/auth/login", LoginPerson);

//User Update
Router.put("/api/users/:id", verifyToken, UpdateUser);

export default Router;

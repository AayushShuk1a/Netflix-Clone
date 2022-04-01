import express from "express";
import { RegisterPerson, LoginPerson } from "../Controller/UserController.js";

const Router = express.Router();

Router.post("/api/auth/register", RegisterPerson);

Router.post("/api/auth/login", LoginPerson);

export default Router;

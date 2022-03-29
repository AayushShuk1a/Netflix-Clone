import express from "express";
import { RegisterPerson } from "../Controller/UserController.js";

const Router = express.Router();

Router.post("/api/auth/register", RegisterPerson);

export default Router;

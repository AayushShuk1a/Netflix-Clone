import express from "express";
import { verifyToken } from "../VerifyToken.js";
import { AddList, DeleteList, GetList } from "../Controller/ListController.js";

const Router = express.Router();

//Add List
Router.post("/", verifyToken, AddList);

//Delete List
Router.delete("/:id", verifyToken, DeleteList);

//Get List
Router.get("/", verifyToken, GetList);

export default Router;

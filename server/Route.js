import express, { Router } from "express";
const URL = "http://localhost:8000";
import { addUser, getUser } from "./userController.js";
import { addProduct } from "./userController.js";

const router = express.Router();
router.post("/signup", addUser);
router.post("/login", getUser);

router.post("/addproduct", addProduct);
export default router;

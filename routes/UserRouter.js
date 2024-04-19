"use strict";
import express from "express";
import UserController from "../controllers/UserController.js";
const router = express();

router.put("/:email", UserController.updateUser);
router.post("/create", UserController.createUser);

export default router;

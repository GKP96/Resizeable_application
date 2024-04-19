"use strict";

import bcryptjs from "bcryptjs";
import userService from "../services/UserService.js";
import CountNumber from "../models/Count.js";
const createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    userData.password = await bcryptjs.hash(userData.password, 10);
    const newUser = await userService.create(userData);
    let countDocument = await CountNumber.findOne();
    if (!countDocument) {
      countDocument = new CountNumber();
    }
    countDocument.count++;
    await countDocument.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const email = req.params.email;
    const updatedData = req.body;
    const updatedUser = await userService.findOneAndUpdate(
      { email: email },
      updatedData
    );
    console.log(updatedUser);
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    let countDocument = await CountNumber.findOne();
    if (!countDocument) {
      countDocument = new CountNumber();
    }
    countDocument.count++;
    await countDocument.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  updateUser,
  createUser,
};

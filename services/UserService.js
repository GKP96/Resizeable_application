"use strict";
import User from "../models/User.js";
const create = async (values) => {
  return await User.create(values);
};

const findOneAndUpdate = async (query, data) => {
  return await User.findOneAndUpdate(query, data, { new: true }).exec();
};

const findOne = async (query) => {
  return await User.findOne(query).exec();
};

export default {
  create,
  findOneAndUpdate,
  findOne,
};

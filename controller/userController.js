import mongoose from "mongoose";
import User from "../model/UserModel.js";

export const addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding user", error: error.message });
  }
};

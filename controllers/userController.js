import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtToken = jwt.sign({ id: user._id }, SECRET, { expiresIn: "100000ms" });

const SECRET = "abc-def-ghi-jl-mn-opqr-s-tu-vwxyz";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(404).json("Enter all valid details");
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({ message: "User Already Exist" });
    }
    user = await User.create(req.body);

    const token = jwtToken(user._id);
    res.status(200).json({
      status: success,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }
    const isMatch = await bcrypt.compare(this.password, password);
    if (!isMatch) {
      return res.status(404).json({ message: "The password does not match" });
    }

    const token = jwtToken(user._id);

    res.status(200).json({
      status: success,
      message: "Logged In",
      user,
    });
  } catch (error) {
    next(error);
  }
};

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


// Check if the model is already registered, if not, register it
const UserModel = require("../models/UserModel");

const getUserDetailsFromToken = async (token) => {
  if (!token) {
    return {
      message: "session out",
      logout: true,
    };
  }

  const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
  const user = await UserModel.findById(decode.id).select('-password');

  return user;
};

module.exports = getUserDetailsFromToken;

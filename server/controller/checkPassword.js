const UserModel = require("../models/UserModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function checkPassword(request, response) {
  try {
    const { password, userId } = request.body;

    // Find user by ID
    const user = await UserModel.findById(userId);

    // Check if user exists
    if (!user) {
      return response.status(404).json({
        message: "User not found",
        error: true,
      });
    }

    // Compare the provided password with the stored hash
    const verifyPassword = await bcryptjs.compare(password, user.password);

    if (!verifyPassword) {
      return response.status(400).json({
        message: "Please check password",
        error: true,
      });
    }

    // Create token data with user ID and email
    const tokenData = {
      id: user._id,
      email: user.email,
    };

    // Sign the JWT token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d", // Token expires in 1 day
    });

    // Set cookie options (httpOnly for security, secure in production)
    const cookieOptions = {
      httpOnly: true, // Ensures the cookie is only accessible by the server
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict", // Mitigates CSRF attacks
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    };

    // Set the cookie and send the response
    return response
      .cookie("token", token, cookieOptions)
      .status(200)
      .json({
        message: "Login Successfully",
        token: token,
        success: true,
      });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = checkPassword;

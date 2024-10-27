const express = require("express");
const registerUser = require("../controller/registerUser");
const checkEmail = require("../controller/checkEmail");
const checkPassword = require("../controller/checkPassword");
const userDetail = require("../controller/userDetail");
const logout = require("../controller/logout");
const updateUserDetails = require("../controller/updateUserDetails");

const router = express.Router();

//create user api
router.post("/register", registerUser);

//check user email
router.post("/email", checkEmail);

//check user password
router.post("/password", checkPassword);

//login user detail
router.get("/user-details", userDetail);

//logout user
router.get("/logout", logout);

//update user details
router.post('/update-user',updateUserDetails)

module.exports = router;

const express = require("express");
const {homeInterfacepost, userLogInInterface, activateUser, userRegister, loginUser, logoutUser, homeInterface, userRegInterface} = require("../controllers/user.controller");
const { isLoggedIn, isLoggedOut } = require("../middleware/authentication");
const router = express.Router();

router
  .get("/", isLoggedIn, homeInterface)
  .get("/reg", userRegInterface)
  .get("/login", userLogInInterface)
  .post("/reg", userRegister)
  .get("/activate", activateUser)
  .post("/login", isLoggedOut, loginUser)
  .post("/logout", isLoggedIn, logoutUser)

module.exports = router;

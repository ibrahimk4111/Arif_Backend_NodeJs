const express = require("express");
const {userLogInInterface, activateUser, userRegister, loginUser, logoutUser} = require("../controllers/user.controller");
const router = express.Router();

router
  .get("/", userLogInInterface)
  .post("/reg", userRegister)
  .get("/activate/:id", activateUser)
  .post("/login", loginUser)
  .post("/logout", logoutUser)

module.exports = router;

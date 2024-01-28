const express = require("express");
const {userLogInInterface, activateUser, userRegister, loginUser} = require("../controllers/user.controller");
const router = express.Router();

router
  .get("/", userLogInInterface)
  .get("/activate/:id", activateUser)
  .post("/reg", userRegister)
  .post("/login", loginUser)

module.exports = router;

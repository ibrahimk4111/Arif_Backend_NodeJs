const express = require("express");
const {userLogInInterface, userRegister, loginUser} = require("../controllers/user.controller");
const router = express.Router();

router
  .get("/", userLogInInterface)
  .post("/reg", userRegister)
  .post("/login", loginUser)

module.exports = router;

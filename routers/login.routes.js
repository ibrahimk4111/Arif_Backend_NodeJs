const express = require("express");
const {userLogInInterface, loginUser} = require("../controllers/login.controller");
const router = express.Router();

router
  .get("/", userLogInInterface)
  .post("/loginUser", loginUser)

module.exports = router;

const express = require("express");
const {activateUser, userRegister, loginUser, logoutUser} = require("../controllers/user.controller");
// const { isLoggedIn, isLoggedOut } = require("../middleware/authentication");
const router = express.Router();

router
  .post("/reg", userRegister)
  .get("/activate", activateUser)
  .post("/login", loginUser)
  .post("/logout", logoutUser)

module.exports = router;

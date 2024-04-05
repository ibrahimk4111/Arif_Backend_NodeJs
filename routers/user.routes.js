const express = require("express");
const {activateUser, userRegister, loginUser, logoutUser} = require("../controllers/user.controller");
const { isLoggedIn, isLoggedOut } = require("../middleware/authentication");
const router = express.Router();

router
  .post("/reg", userRegister)
  .get("/activate", activateUser)
  .post("/login", isLoggedOut, loginUser)
  .post("/logout", isLoggedIn, logoutUser)

module.exports = router;

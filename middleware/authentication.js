const jwt = require("jsonwebtoken");
const { loginSecretKey } = require("../config/config");

// isLoggedIn middleware
const isLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.logintoken;
    if (!token) {
      res.redirect("/login");
    }
    const decoded = jwt.verify(token, loginSecretKey);
    if (!decoded) {
      res.json('invalid access token')
    }
    req.body.userId = decoded._id;
    next();
  } catch (error) {
    res.json(error);
  }
};

// isLoggedOut middleware
const isLoggedOut = (req, res, next) => {
  try {
    const token = req.cookies.logintoken;
    if (!token) {
      res.json("You are not logged in yet. Please log in first.");
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { isLoggedIn, isLoggedOut };

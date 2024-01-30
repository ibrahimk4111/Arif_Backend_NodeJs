const createJWT = require("../helper/jwtConfig");
const userSchema = require("../models/user.model");
const config = require("../config/config");
const emailWithNodeMailer = require("../helper/nodemailerConfig");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

let regToken = '';

// Home interface
const homeInterface = (req, res) => {
  res.render("home", { title: "Home page" });
};
// Register interface
const userRegInterface = (req, res) => {
  res.render("regForm", { title: "sign up form" });
};
// log in interface
const userLogInInterface = (req, res) => {
  res.render("loginForm", { title: "log in form" });
};

// register a new user
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // checking whether user exist or not
    const existingUser = await userSchema.findOne({ email: email });
    if (existingUser) {
      res.json("User already exist. Log in please.");
    } else {
      try {
        //token generating
        const token = await createJWT(
          { name, email, password },
          config.secretKey,
          "10m"
        );

        regToken = token;

        // preparing mail data
        const emailData = {
          email,
          subject: "Account activation email",
          html: `
      <h2>Hello ${name} !</h2>
      <p>please click here to <a href="${config.serverUrl}/activate" target="_blanck">activate your account</a></p> 
      `,
        };

        // send mail to the user
        await emailWithNodeMailer(emailData);
        res.render('checkEmail');
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// active user using jwt
const activateUser = async (req, res) => {
  try {
    const decode = jwt.verify(regToken, config.secretKey);
    if (decode) {
      await userSchema.create(decode.payload);
      // res.json("user created successfully");
      res.redirect("/")
    } else {
      res.json("token doesn't found");
    }

  } catch (error) {
    console.log(error);
  }
};

// user log in
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check user exists or not
    const existingUser = await userSchema.findOne({ email: email });
    if (existingUser) {
      bcryptjs.compare(
        password,
        existingUser.password,
        async function (err, result) {
          if (result) {
            //make a token and save it to the cookies
            const loginToken = await createJWT(
              { _id: existingUser._id },
              config.loginSecretKey,
              "365d"
            );
            res.cookie("loginToken", loginToken, {
              // maxAge: 50 * 60 * 1000,
              httpOnly: true,
              // secure: true,
              sameSite: "none",
            });
            res.status(200).json({ message: "Can access to the DB" });
          }
        }
      );
    } else {
      res.status(409).json({ message: "User doen" });
    }
  } catch (error) {
    console.log(error);
  }
};

// user log out
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("loginToken");
    res.json("user logged out successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  homeInterface,
  userRegInterface,
  userLogInInterface,
  userRegister,
  activateUser,
  loginUser,
  logoutUser,
};

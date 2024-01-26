const userSchema = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userLogInInterface = (req, res) => {
  res.render("loginForm", { title: "log in form" });
};

// register a new user
const userRegister = async (req, res) => {
  try {
    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      try {
        const email = req.body.email;
        const newUser = new userSchema({
          email,
          password: hash,
        });

        await newUser.save();
        res.status(201).json({ newUser });
      } catch (err) {
        console.log(err.message);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// log in access for registered user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userSchema.findOne({ email: email });

    if (existingUser) {
      bcrypt.compare(password, existingUser.password, async function (err, result) {
          if (result) {
            res.status(200).json({ message: "Can access to the DB" });
          }else{
            res.status(400).json({message: "Wrong Password"})
          }
        }
      );
    } else {
      res.status(404).json({ message: "Wrong password and email" });
    }
  } catch (error) {}
};

module.exports = {
  userLogInInterface,
  userRegister,
  loginUser,
};

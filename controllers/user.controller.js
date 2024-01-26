const userSchema = require("../models/user.model")

const userLogInInterface = (req, res) => {
  res.render("loginForm", { title: "log in form" });
};


// register a new user
const userRegister = async (req, res) => {
  const {email, password} = req.body;
  const newUser = new userSchema({
    email,
    password
  })

  await newUser.save();
  res.status(201).json({newUser})
};


// log in access for registered user
const loginUser = async (req, res) => {
  const {email, password} = req.body;
  const existingUser = await userSchema.findOne({email:email});
  
  if (existingUser && existingUser.password === password) {
    res.status(200).json({message:"Can access to the DB"});
  }else{
    res.json({message:"Wrong password and email"});
  }
  
};

module.exports = {
  userLogInInterface,
  userRegister,
  loginUser,
};

const createJWT = require("../helper/jwtConfig");
const userSchema = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const config = require("../config/config");
const emailWithNodeMailer = require("../helper/nodemailerConfig");

const userLogInInterface = (req, res) => {
  res.render("loginForm", { title: "log in form" });
};

// register a new user
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    //token generating
    const token = await createJWT(
      { name, email, password },
      config.secretKey,
      "10m"
    );

    // preparing mail data
    const emailData = {
      email,
      subject: "Account activation email",
      html: `
      <h2>Hello ${name} !</h2>
      <p>please click here to <a href="${config.serverUrl}/activate/${token}" target="_blanck">activate your account</a></p> 
      `,
    };

    // send mail to the user
    const mailInfo = await emailWithNodeMailer(emailData);
    res.json(mailInfo.messageId);
  } catch (error) {
    console.log(error);
  }
};

// const userRegistrationActivate = async (req, res) => {
//   try {
//     bcryptjs.hash(req.body.password, saltRounds, async function (err, hash) {
//       try {
//         const email = req.body.email;
//         const newUser = new userSchema({
//           email,
//           password: hash,
//         });

//         await newUser.save();
//         res.status(201).json({ newUser });
//       } catch (err) {
//         console.log(err.message);
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// log in access for registered user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userSchema.findOne({ email: email });

    if (existingUser) {
      bcryptjs.compare(
        password,
        existingUser.password,
        async function (err, result) {
          if (result) {
            res.status(200).json({ message: "Can access to the DB" });
          } else {
            res.status(400).json({ message: "Wrong Password" });
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

const createJWT = require("../helper/jwtConfig");
const userSchema = require("../models/user.model");
const config = require("../config/config");
const emailWithNodeMailer = require("../helper/nodemailerConfig");
const jwt = require("jsonwebtoken");
const bcryptjs  = require("bcryptjs")

const userLogInInterface = (req, res) => {
  res.render("loginForm", { title: "log in form" });
};

//active user using jwt
const activateUser = async (req, res) => {
  try {
    const accessToken = req.params.id;
    const decode = jwt.verify(accessToken, config.secretKey);
    if (decode) {
      await userSchema.create(decode.payload);
      res.json("user created successfully");
    } else {
      console.log("token doesn't found");
    }
  } catch (error) {
    console.log(error);
  }
};

// register a new user
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking whether user exist or not
    const existingUser = await userSchema.findOne({ email: email });
    if (existingUser) {
      res.json("User already exist. Please log in.");
    } else {
      try {
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
        res.json("Check your gmail to verify.");
      } catch (error) {
        console.log(error)
      }
    }
  } catch (error) {
    console.log(error);
  }
};


// log in access for registered user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // check user exists or not
    const existingUser = await userSchema.findOne({ email: email });

    if (existingUser) {
      bcryptjs.compare(password, existingUser.password, async function (err, result) {
          if (result) {
            //make a token and save it to the cookies
            const loginToken = await createJWT({id: existingUser._id}, config.loginSecretKey, '365d' )
            res.cookie('loginToken', loginToken, {
              // maxAge: 15 * 60 * 1000,
              httpOnly: true,
              // secure: true,
              sameSite: 'none'
            })

            res.status(200).json({ message: "Can access to the DB" });
          } else {
            res.status(400).json({ message: "Email doesn't exist." });
          }
        }
      );
    } else {
      res.status(409).json({ message: "Wrong password and email" });
    }
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  userLogInInterface,
  activateUser,
  userRegister,
  loginUser,
};

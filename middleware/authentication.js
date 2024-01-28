const jwt = require("jsonwebtoken");
const { loginSecretKey } = require("../config/config");

const isLoggedIn = (req, res, next) =>{
    try {
        const token = req.cookies.logintoken;
        if(token){
            const decoded = jwt.verify(token, loginSecretKey);
            if(decoded){
                console.log("Invalid access token. Please login again.")
                req.body.userId = decoded._id;
            }else{
                console.log("Invalid access token")
            }
        }
        next();
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = isLoggedIn
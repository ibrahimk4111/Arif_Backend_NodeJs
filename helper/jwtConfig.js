const jwt = require('jsonwebtoken');

const createJWT = async (payload, secretKey, time) =>{
    if(typeof payload != "object" || !payload){
        console.log("Payload must be a non-empty object.");
    }
    if( typeof secretKey != "string" || !secretKey){
        console.log("Secre key must be a non-empty string.")
    }
    
    try {
        //creating the token
        const token = jwt.sign({payload}, secretKey, {expiresIn:time});   
        return token;
    } catch (error) {
        console.error("Failed to sing the JWT : ", error)
    }
}

module.exports = createJWT
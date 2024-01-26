const {mongoose, Schema} = require("mongoose")
const encrypt = require('mongoose-encryption');
const config = require("../config/config")

const userSchema = Schema({
    email:{
        type:String,
        require: [true, "Please enter email address"]
    },
    password:{
        type:String,
        require: [true, "Please enter password address"]
    }
},{timestamps: true})

var secret = config.encKey;
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

module.exports = mongoose.model("users", userSchema)
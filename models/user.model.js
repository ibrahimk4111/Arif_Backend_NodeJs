const {mongoose, Schema} = require("mongoose")

const userSchema = Schema({
    
    name:{
        type:String,
        required: [true, "Please enter your name"]
    },
    email:{
        type:String,
        required: [true, "Please enter email address"]
    },
    password:{
        type:String,
        required: [true, "Please enter password address"]
    }
    
},{timestamps: true})

module.exports = mongoose.model("users", userSchema)
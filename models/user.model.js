const {mongoose, Schema} = require("mongoose")
const bcryptjs = require("bcryptjs")

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
        required: [true, "Please enter password address"],
        set: (myPassword)=>bcryptjs.hashSync(myPassword, bcryptjs.genSaltSync(10))
    }
    
},{timestamps: true})

module.exports = mongoose.model("users", userSchema)
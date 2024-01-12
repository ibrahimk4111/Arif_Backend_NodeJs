const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    desc: String,
    createdOn:Date,
    updatedOn:Date,

})

module.exports = mongoose.model("products", productSchema)
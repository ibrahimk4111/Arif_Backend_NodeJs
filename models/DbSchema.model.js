const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name : String,
    url: String,
    description: String,
    Rating: String,
},{timestamps: true})

module.exports = mongoose.model("item", itemSchema)
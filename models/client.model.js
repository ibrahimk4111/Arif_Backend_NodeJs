const { mongoose, Schema } = require("mongoose");

const clientSchema = Schema({
  client_name: String,
  client_image: String
},{timestamps: true});

module.exports = mongoose.model("clients", clientSchema);

const { mongoose, Schema } = require("mongoose");

const clientSchema = Schema({
  client_name: String,
  client_image: String,
  createdOn: { type: Date, default: Date.now() },
  updatedOn: Date,
});

module.exports = mongoose.model("clients", clientSchema);

const { mongoose, Schema } = require("mongoose");

const partnerSchema = Schema({
  partner_name: String,
  partner_image: String,
},{timestamps: true});

module.exports = mongoose.model("partners", partnerSchema);

const { mongoose, Schema } = require("mongoose");

const partnerSchema = Schema({
  partner_name: String,
  partner_image: String,
  createdOn: { type: Date, default: Date.now() },
  updatedOn: Date,
});

module.exports = mongoose.model("partners", partnerSchema);

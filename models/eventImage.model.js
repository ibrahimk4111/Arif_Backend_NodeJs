const { mongoose, Schema } = require("mongoose");

const eventImageSchema = Schema({
  event_image:String,
},{timestamps: true});

module.exports = mongoose.model("event_images", eventImageSchema);
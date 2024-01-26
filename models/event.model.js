const { mongoose, Schema } = require("mongoose");

const eventSchema = Schema({
  event_name: String,
  event_images: [{ type: Schema.Types.ObjectId, ref: "event_image" }],
},{timestamps: true});

module.exports = mongoose.model("events", eventSchema);
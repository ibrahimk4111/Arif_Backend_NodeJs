const { mongoose, Schema } = require("mongoose");

const eventSchema = Schema({
  event_name: String,
  event_images: [{ type: Schema.Types.ObjectId, ref: "event_image" }],
  createdOn: { type: Date, default: Date.now() },
  updatedOn: Date,
});

module.exports = mongoose.model("events", eventSchema);
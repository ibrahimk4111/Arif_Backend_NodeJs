const { mongoose, Schema } = require("mongoose");

const eventImageSchema = Schema({
  event_image:String,
  createdOn: { type: Date, default: Date.now() },
  updatedOn: Date,
});

module.exports = mongoose.model("eventImage", eventImageSchema);
const { mongoose, Schema } = require("mongoose");

const eventSchema = Schema({
  event_name:String,
  images: [{ type: Schema.Types.ObjectId, ref: "eventImage" }],
  createdOn: { type: Date, default: Date.now() },
  updatedOn: Date,
});

module.exports = mongoose.model("event", eventSchema);
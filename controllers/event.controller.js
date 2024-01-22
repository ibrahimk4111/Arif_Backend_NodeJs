const mongoose = require("mongoose");
const upload_to_cloudinary = require("../helper/cloudinaryConfig");
const eventSchema = require("../models/event.model");
const eventImageSchema = require("../models/eventImage.model");

const get_all_event = async (req, res) => {
  const events = await eventSchema.find().populate({ path: "event_images", model: "event_images" });
  res.status(200).json({ success: "true", events });
};

// create events
const create_event = async (req, res) => {
  const get_event_name = req.body.event_name;
  const event = new eventSchema({
    event_name: get_event_name
  });

  await event.save();
  res.status(200).json({ message: "event created successfully", event });
};

//create image into events
const create_event_image = async (req, res) => {
  try {
    const eventImage = new eventImageSchema({});

    // getting image url from cloudinary cloud
    const imagePath = req.file?.path;
    try {
      const response = await upload_to_cloudinary(imagePath);
      eventImage.event_image = response.secure_url;
      console.log("succefully uploaded event image");
    } catch (error) {
      console.log(error);
    }

    // pushing product into a specific companies product array
    let objId = new mongoose.Types.ObjectId(eventImage.id);
    await eventSchema.updateOne(
      { _id: "65aea2e32b5c6c5dd3ba174c" },
      { $push: { event_images: objId } },
      { upsert: false, new: true }
    );

    await eventImage.save();
    res.status(200).json({ eventImage });
  } catch (error) {
    console.log(error);
  }
};

const update_event = async (req, res) => {
  res.status(200).json({ message: "event updated successfully" });
};

const delete_event = async (req, res) => {
  res.status(200).json({ message: "event deleted successfully" });
};

module.exports = {
  get_all_event,
  create_event,
  create_event_image,
  update_event,
  delete_event,
};

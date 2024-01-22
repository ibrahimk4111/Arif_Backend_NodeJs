const cloudinary = require("cloudinary").v2;

const config = require("../config/config");

cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.cloud_api,
  api_secret: config.cloud_secret,
});

const upload_to_cloudinary = async (imagePath) => {
  try {
    const response = await cloudinary.uploader.upload(imagePath, {
      folder: "Arifs_(BD)_Ltd",
    });
    return response;
  } catch (error) {
    console.log(error)
  }
};

module.exports = upload_to_cloudinary;

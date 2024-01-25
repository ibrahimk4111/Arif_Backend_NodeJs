const upload_to_cloudinary = require("../helper/cloudinaryConfig");
const clientSchema = require("../models/client.model");

// getting all products
const get_all_client = async (req, res) => {
  try {
    const clients = await clientSchema.find();
    res.status(200).json({ clients });
  } catch (error) {
    console.log(error);
  }
};

// create a new client
const create_client = async (req, res) => {
  try {
    const client_name = req.body.client_name;
    const newclient = new clientSchema({
        client_name
    });

    const imagePath = req.file?.path;
    const response = await upload_to_cloudinary(imagePath);
    newclient.client_image = response.secure_url

    await newclient.save();
    res.status(200).json({ newclient });
  } catch (error) {
    console.log(error);
  }
};

// update the specific product using id
const update_client = async (req, res) => {
  try {
    const client = req.params.id;
    const founded_client = await client.findOne({ _id: client });
    founded_client.client = req.body.client;
    founded_client.website = req.body.website;
    founded_client.product_category = req.body.product_category;
    founded_client.updatedOn = Date.now();

    await founded_client.save();
    res.status(200).send("Succesfully client details updated");
  } catch (error) {
    console.log(error);
  }
};

// delete the specific product using id
const delete_client = async (req, res) => {
  try {
    const product_id = req.params.id;
    await productSchema.deleteOne({ _id: product_id });
    res
      .status(200)
      .json({ success: true, message: "deleted product successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  get_all_client,
  create_client,
  update_client,
  delete_client,
};

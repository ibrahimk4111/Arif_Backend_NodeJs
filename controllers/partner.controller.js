const upload_to_cloudinary = require("../helper/cloudinaryConfig");
const partnerSchema = require("../models/partner.model");

// getting all products
const get_all_partner = async (req, res) => {
  try {
    const partners = await partnerSchema.find();
    res.status(200).json({ partners });
  } catch (error) {
    console.log(error);
  }
};

// create a new partner
const create_partner = async (req, res) => {
  try {
    const partner_name = req.body.partner_name;
    const newpartner = new partnerSchema({
        partner_name
    });

    const imagePath = req.file?.path;
    const response = await upload_to_cloudinary(imagePath);
    newpartner.partner_image = response.secure_url

    await newpartner.save();
    res.status(200).json({ newpartner });
  } catch (error) {
    console.log(error);
  }
};

// update the specific product using id
const update_partner = async (req, res) => {
  try {
    const partner = req.params.id;
    const founded_partner = await partner.findOne({ _id: partner });
    founded_partner.partner = req.body.partner;
    founded_partner.website = req.body.website;
    founded_partner.product_category = req.body.product_category;
    founded_partner.updatedOn = Date.now();

    await founded_partner.save();
    res.status(200).send("Succesfully partner details updated");
  } catch (error) {
    console.log(error);
  }
};

// delete the specific product using id
const delete_partner = async (req, res) => {
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
  get_all_partner,
  create_partner,
  update_partner,
  delete_partner,
};

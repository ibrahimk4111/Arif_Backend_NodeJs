const mongoose = require("mongoose");
const companySchema = require("../models/company.model");
const productSchema = require("../models/products.model");
const upload_to_cloudinary = require("../helper/cloudinaryConfig");

// get all products only
const get_products = async (req, res) =>{
  const products = await productSchema.find();
  res.status(200).json({ success:true, products })
}

// create a new product for a Company
const create_product = async (req, res) => {
  try {
    const { product_name, pack_size, desc, inStock } = req.body;
    const product = new productSchema({
      product_name,
      pack_size,
      desc,
      inStock: Number(inStock),
    });

    // getting image url from cloudinary cloud
    const imagePath = req.file?.path;
    try {
      const response = await upload_to_cloudinary(imagePath);
      product.product_image = response.secure_url;
      console.log("succefully uploaded");
    } catch (error) {
      console.log(error);
    }

    // pushing product into a specific companies product array
    let objId = new mongoose.Types.ObjectId(product.id);
    await companySchema.updateOne(
      { _id: "65b6bad9d2d86cd6e30aeabe" },
      { $push: { products: objId } },
      { upsert: false, new: true }
    );

    await product.save();
    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
  }
};

// update the specific product using id
const update_product = async (req, res) => {
  try {
    const product_id = req.params.id;
    const founded_product = await productSchema.findOne({ _id: product_id });
    founded_product.name = req.body.name;
    founded_product.desc = req.body.desc;
    founded_product.updatedOn = Date.now();
    founded_product.save();
    res.status(200).json({ success: true, founded_product });
  } catch (error) {
    console.log(error);
  }
};

// delete the specific product using id
const delete_product = async (req, res) => {
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
  get_products,
  create_product,
  update_product,
  delete_product,
};

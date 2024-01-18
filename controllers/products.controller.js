const mongoose = require("mongoose");
const companySchema = require("../models/company.model");
const productSchema = require("../models/products.model");

// create a new product for a Company
const create_product = async (req, res) => {
  try {
    const { product_name, pack_size, desc, inStock } = req.body;
    const productItem = new productSchema({
      product_name,
      pack_size,
      desc,
      inStock: Number(inStock),
    });

    let objId = new mongoose.Types.ObjectId(productItem.id);
    await companySchema.updateOne(
      { _id: "65a97f75e7b5eecd8c412992" },
      { $push: { products: objId } },
      { upsert: false, new: true }
    );

    await productItem.save();
    res.status(200).json({ productItem });
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
  create_product,
  update_product,
  delete_product,
};

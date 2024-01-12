const productSchema = require("../models/products.model");

const get_products = async (req, res) => {
  const products = await productSchema.find();
  res.status(200).json({ success: true, products });
};

const create_products = async (req, res) => {
  const newProducts = new productSchema({
    name: req.body.name,
    desc: req.body.desc,
    createdOn: Date.now(),
  });

  await newProducts.save();
  res.status(200).json({ message: "created new products" });
};

const update_products = async (req, res) => {
  const product_id = req.params.id;
  const founded_product = await productSchema.findOne({ _id: product_id });
  founded_product.name = req.body.name;
  founded_product.desc = req.body.desc;
  founded_product.save();
  res.json({ founded_product, message: "updated the products" });
};

const delete_products = async (req, res) => {
    const product_id = req.params.id;
    await productSchema.deleteOne({_id: product_id})
    res.json({ success: true, message: "deleted product successfully" });
};

module.exports = {
  get_products,
  create_products,
  update_products,
  delete_products,
};

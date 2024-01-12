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

const update_products = (req, res) => {
  res.json({ message: "update the products" });
};

const delete_products = (req, res) => {
  res.json({ message: "delete products" });
};

module.exports = {
  get_products,
  create_products,
  update_products,
  delete_products,
};

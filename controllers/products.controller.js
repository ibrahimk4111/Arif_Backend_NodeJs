const productSchema = require("../models/products.model");

// getting all products
const get_products = async (req, res) => {
  try {
    const products = await productSchema.find();
    res.status(200).render("nav.ejs", {title:"Get Products", products: products});
    // res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
  }
};

// getting single product
const get_single_product = async (req, res) => {
  try {
    const product_id = req.params.id;
    const products = await productSchema.findOne({ _id: product_id });
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
  }
};

// create a new product
const create_product = async (req, res) => {
  try {
    const newProducts = new productSchema({
      name: req.body.name,
      desc: req.body.desc,
      createdOn: Date.now(),
    });

    await newProducts.save();
    // res.status(200).json({ message: "created new products" });
    // res.status(200).render("nav.ejs");
    res.status(301).redirect("/products")
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
    res.status(200).json({ success: true, message: "deleted product successfully" });
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  get_products,
  get_single_product,
  create_product,
  update_product,
  delete_product,
};

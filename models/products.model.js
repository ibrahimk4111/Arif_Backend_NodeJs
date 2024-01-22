const { mongoose, Schema } = require("mongoose");

const productSchema = Schema({
  product_name: String,
  product_image: String,
  pack_size: String,
  desc: String,
  inStock: Number,
});

module.exports = mongoose.model("products", productSchema);

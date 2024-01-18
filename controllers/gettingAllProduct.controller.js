const companySchema = require("../models/company.model");

// getting all products
const get_products = async (req, res) => {
  try {
    const companies = await companySchema.find().populate({ path: "products", model: "products" });
    res.status(200).json({companies});
  } catch (error) {
    console.log(error);
  }
};

module.exports = get_products
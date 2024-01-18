const companySchema = require("../models/company.model");

// getting all products
const get_products = async (req, res) => {
  try {
    const companiesData = await companySchema.find().populate({ path: "products", model: "products" });
    res.status(200).json({companiesData});
  } catch (error) {
    console.log(error);
  }
};


// create a new Company
const create_company = async (req, res) => {
  try {
    const { company_name, website, product_category } = req.body;
    const newCompany = new companySchema({
      company_name, 
      website,
      product_category
    });
    await newCompany.save();
    res.status(200).json({ newCompany });
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
  create_company,
  update_product,
  delete_product,
};

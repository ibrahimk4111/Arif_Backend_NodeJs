const companySchema = require("../models/company.model");

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
const update_company = async (req, res) => {
  try {
    const company_id = req.params.id;
    const founded_company = await companySchema.findOne({ _id: company_id });
    founded_company.company_name = req.body.company_name;
    founded_company.website = req.body.website;
    founded_company.product_category = req.body.product_category;
    founded_company.updatedOn = Date.now();

    await founded_company.save();
    res.status(200).send("Succesfully company details updated");
  } catch (error) {
    console.log(error);
  }
};

// delete the specific product using id
const delete_company = async (req, res) => {
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
  create_company,
  update_company,
  delete_company,
};

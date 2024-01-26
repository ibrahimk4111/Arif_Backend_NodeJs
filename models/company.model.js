const { mongoose, Schema } = require("mongoose");

const companySchema = Schema({
  company_name:String,
  website:String,
  product_category: String,
  products: [{ type: Schema.Types.ObjectId, ref: "product" }],
},{timestamps: true});

module.exports = mongoose.model("companies", companySchema);
const { mongoose, Schema } = require("mongoose");

const companySchema = Schema({
  company_name:String,
  website:String,
  product_category: String,
  products: [{ type: Schema.Types.ObjectId, ref: "product" }],
  createdOn: { type: Date, default: Date.now },
  updatedOn: Date,
});

module.exports = mongoose.model("companies", companySchema);
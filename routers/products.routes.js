const express = require("express");
const {
  update_product,
  delete_product,
  create_product_item,
} = require("../controllers/products.controller");
const { get_products, create_company } = require("../controllers/company.controller");


const router = express.Router();

router.get("/", get_products).post("/create", create_company).post("/create/item", create_product_item);
router.put("/update/:id", update_product).delete("/delete/:id", delete_product);

module.exports = router;

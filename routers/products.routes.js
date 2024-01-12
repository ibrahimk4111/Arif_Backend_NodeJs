const express = require("express");
const {
  get_products,
  create_product,
  update_product,
  delete_product,
  get_single_product,
} = require("../controllers/products.controller");


const router = express.Router();

router.get("/", get_products).post("/create", create_product);
router.get("/:id", get_single_product).put("/update/:id", update_product).delete("/delete/:id", delete_product);

module.exports = router;

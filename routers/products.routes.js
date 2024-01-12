const express = require("express");
const {
  get_products,
  create_products,
  update_products,
  delete_products,
} = require("../controllers/products.controller");


const router = express.Router();

router.get("/", get_products).post("/create", create_products);
router.put("/update/:id", update_products).delete("/delete/:id", delete_products);

module.exports = router;

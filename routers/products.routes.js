const express = require("express");
const router = express.Router();

const {
  update_product,
  delete_product,
  create_product,
} = require("../controllers/products.controller");

router
  .post("/create", create_product)
  .put("/update/:id", update_product)
  .delete("/delete/:id", delete_product);

module.exports = router;

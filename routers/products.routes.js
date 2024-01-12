const express = require("express");
const {
  get_products,
  create_products,
  update_products,
  delete_products,
} = require("../controllers/products.controller");
const router = express.Router();

router.get("/get", get_products);

router.post("/create", create_products);

router.put("/update", update_products);

router.delete("/delete", delete_products);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  update_product,
  delete_product,
  create_product,
} = require("../controllers/products.controller");

const upload = require("../middleware/multerFileUpload");

router
  .post("/create", upload.single('product_image'), create_product)
  .put("/update/:id", update_product)
  .delete("/delete/:id", delete_product);

module.exports = router;

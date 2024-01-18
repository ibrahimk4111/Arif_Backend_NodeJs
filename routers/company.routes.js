const express = require("express");
const router = express.Router();

const {
  create_company,
  update_company,
  delete_company,
} = require("../controllers/company.controller");

router
  .post("/create", create_company)
  .put("/update/:id", update_company)
  .delete("/delete/:id", delete_company);

module.exports = router;

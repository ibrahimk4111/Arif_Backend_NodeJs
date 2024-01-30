const express = require("express");
const router = express.Router();

const {
  get_company_products,
  create_company,
  update_company,
  delete_company,
} = require("../controllers/company.controller");
const { isLoggedIn } = require("../middleware/authentication");

router.use(isLoggedIn)
router
  .get("/", get_company_products)
  .post("/create", create_company)
  .put("/update/:id", update_company)
  .delete("/delete/:id", delete_company);

module.exports = router;

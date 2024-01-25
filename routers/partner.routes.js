const express = require("express");
const {
  get_all_partner,
  create_partner,
  update_partner,
  delete_partner,
} = require("../controllers/partner.controller");
const upload = require("../middleware/multerFileUpload");
const router = express.Router();

router
  .get("/", get_all_partner)
  .post("/create", upload.single("partner_image"), create_partner)
  .put("/update", update_partner)
  .delete("/delete", delete_partner)

module.exports = router;

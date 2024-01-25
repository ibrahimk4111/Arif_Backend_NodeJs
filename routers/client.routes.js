const express = require("express");
const {
  get_all_client,
  create_client,
  update_client,
  delete_client,
} = require("../controllers/client.controller");
const upload = require("../middleware/multerFileUpload");
const router = express.Router();

router
  .get("/", get_all_client)
  .post("/create", upload.single("client_image"), create_client)
  .put("/update", update_client)
  .delete("/delete", delete_client)

module.exports = router;

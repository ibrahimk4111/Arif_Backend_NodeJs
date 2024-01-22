const express = require("express");
const {
  get_all_event,
  create_event,
  update_event,
  delete_event,
  create_event_image,
} = require("../controllers/event.controller");
const upload = require("../middleware/multerFileUpload");
const router = express.Router();

router
  .get("/", get_all_event)
  .post("/create", create_event)
  .post("/image/create", upload.single("event_image"), create_event_image)
  .put("/update", update_event)
  .delete("/delete", delete_event)

module.exports = router;

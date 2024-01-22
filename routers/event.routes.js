const express = require("express");
const {
  get_all_event,
  create_event,
  update_event,
  delete_event,
} = require("../controllers/event.controller");
const router = express.Router();

router
  .get("/", get_all_event)
  .post("/create", create_event)
  .put("/update", update_event)
  .delete("/delete", delete_event)

module.exports = router;

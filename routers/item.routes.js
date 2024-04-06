const express = require("express");
const {
  getAllItems,
  homeInterFace,
  createItem,
} = require("../controllers/item.controller");
const router = express.Router();

router
  .get("/", homeInterFace)
  .get("/item", getAllItems)
  .post("/item/create", createItem);

module.exports = router;

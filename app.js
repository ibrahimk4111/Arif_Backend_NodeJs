const express = require('express');
const app = express();
const router = require("./routers/products.routes")
const path = require("path");
const bodyParser = require("body-parser");

// body parser section
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/views')));

// ejs file engine section
app.set('view engine', 'ejs');

// All the routers for this app
app.use("/products", router)

module.exports = app;
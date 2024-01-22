const express = require('express');
const app = express();
const allProductRouter = require("./routers/gettingAllProduct.routes")
const productRouter = require("./routers/products.routes")
const companyRouter = require("./routers/company.routes")
const path = require("path");
const bodyParser = require("body-parser");

// database connection section
require("./config/mongodbConnection")

// body parser section
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// ejs file engine section
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/views')));

// All the routes for this app
app.use("/", allProductRouter)
app.use("/products", productRouter)
app.use("/company", companyRouter)

app.use((req, res, next)=>{
    res.status(404).json({message: "Page not found"})
    next();
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({status: err.status, message: err})
})

module.exports = app;
const express = require('express');
const app = express();
const router = require("./routers/products.routes")
const path = require("path");
const bodyParser = require("body-parser");

// database connection section
require("./config/mongodbConnection")

// body parser section
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/views')));


// ejs file engine section
app.set('view engine', 'ejs');

// All the routers for this app
app.use("/products", router)

app.use((req, res, next)=>{
    res.status(404).json({message: "Page not found"})
    next();
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({status: err.status, message: err.stack})
})

module.exports = app;
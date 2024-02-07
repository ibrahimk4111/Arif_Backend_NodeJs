const express = require('express');
const app = express();
const eventRouter = require("./routers/event.routes")
const companyRouter = require("./routers/company.routes")
const productRouter = require("./routers/products.routes")
const partnerRouter = require("./routers/partner.routes")
const clientRouter = require("./routers/client.routes")
const userRouter = require("./routers/user.routes")
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// database connection section
require("./config/mongodbConnection")

// body parser section
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())

// ejs file engine section
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/Uploads')));
app.set('trust proxy', true)

// All the routes for this app
app.use("/", userRouter)
app.use("/companies", companyRouter)
app.use("/products", productRouter)
app.use("/events", eventRouter)
app.use("/partners", partnerRouter)
app.use("/clients", clientRouter)

app.use((req, res, next)=>{
    res.status(404).json({message: "Page not found"})
    next();
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({status: err.status, message: err})
})

module.exports = app;
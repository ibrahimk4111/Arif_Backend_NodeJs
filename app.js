const express = require('express');
const app = express();
const userRouter = require("./routers/user.routes")
const itemRouter = require("./routers/item.routes")
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { homeInterFace } = require('./controllers/item.controller');

// database connection section
require("./config/mongodbConnection")

// body parser section
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())

// ejs file engine section
// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/Uploads')));
app.set('trust proxy', true)

// All the routes for this app
app.use("/user", userRouter)
app.use("/", itemRouter)

app.use((req, res, next)=>{
    res.status(404).json({message: "Page not found"})
    next();
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({status: err.status, message: err})
})

module.exports = app;
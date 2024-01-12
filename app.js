const express = require('express');

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');
// app.use()

app.get('/', (req, res) => {
  // res.render('nav', {passText:"get text from app.js"})
  res.status(200).json({message: "get db"})
});


module.exports = app;
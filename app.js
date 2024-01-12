const express = require('express');

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
// app.use()

app.get('/', (req, res) => {
  res.render('nav', {passText:"get text from app.js"})
});


module.exports = app;
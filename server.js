var express = require('express');


var app = express();

app.use(function (req, res, next) {
  //res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Origin', 'https://solstice-assessment-frontend.herokuapp.com/');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./src/app/controllers/customer.controller')(app)
require('./src/app/controllers/account.controller')(app)

//app.get('/hello', (req, res) => res.send('hello world!'))


app.listen(process.env.PORT|| 3000)

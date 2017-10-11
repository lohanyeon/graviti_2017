'use strict';

const server = '127.0.0.1'
const port = 3000;

var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  //res.send('Hello world!');
  res.render('index.ejs', {data: 'graviti'});
});
app.get('/about', function(req, res) {
  res.render('about.ejs');
});
app.get('/work', function(req, res) {
  res.render('work.ejs');
});
app.get('/contact', function(req, res) {
  res.render('contact.ejs');
});

app.listen(port, function() {
  console.log('Started Server '+server+':'+port);
});

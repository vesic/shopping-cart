'use strict';
var express = require('express');
var app = express();
var cors = require('cors')
var mongoose = require('mongoose');

app.use(express.static('build'));
if (app.get('env') === 'development') app.use(cors());

mongoose.connect('mongodb://vesic:vesic@ds037155.mlab.com:37155/my');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});

app.set('port', process.env.PORT || 3333);

app.use('/products', require('./routes/products'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();

async function database() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to databse!');
}
database().catch((error) => {
  console.log('database-error:', error);
});

var indexRouter = require('./routes/index');
var diaryRouter = require('./routes/diary');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/diary', diaryRouter);

module.exports = app;

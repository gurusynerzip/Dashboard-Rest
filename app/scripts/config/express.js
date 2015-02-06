/**
 * Created by gurushantu on 06-02-2015.
 */

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var favicon = require('serve-favicon');
var cors = require('cors');
var path = require('path');

module.exports = function(){
  var app = express();

  app.use(favicon(path.join(__dirname, '../../images/favicon.ico')));
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));
  app.use(methodOverride("__method"));
  app.use(cookieParser());
 // app.use(express.static(path.join(__dirname, '../public/')));
  app.use(cors());
  return app;
};

/**
 * Created by gurushantu on 06-02-2015.
 */

var config = require('./config');

var mongoose = require('mongoose');

var autoIncrement = require('mongoose-auto-increment');

module.exports = function(){
  console.log(config.db);
  var db = mongoose.connect(config.db, function(err){
    if(err){
      console.error('Connection Failed with MONGODB......');
      console.log(err);
    }
  });

  autoIncrement.initialize(db.connection);

  require('../model/organization.model');
  require('../model/project.model');
  require('../model/employee.model');

  return db;
};


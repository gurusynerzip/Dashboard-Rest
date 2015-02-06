/**
 * Created by gurushantu on 06-02-2015.
 */

var mongoose = require('mongoose');

var autoIncrement = require('mongoose-auto-increment');

Schema = mongoose.Schema;

var  EmployeeSchema = new Schema({

  EmpId: {type: Number, require: true},
  firstname: {type: String, require: true},
  lastname: String,
  experiance: Number,
  skills: {type: string, require: true},
  organization: {type: Schema.ObjectId, ref: 'Organization'},
  projects: [{
    type: Schema.ObjectId, ref: 'Project'
  }],
  createdDate: {type: Date, default: Date.now()},
  updateDate: {type: Date, default: Date.now()}
});

mongoose.model('Employee', EmployeeSchema);

EmployeeSchema.plugin(autoIncrement.plugin, {

  model: 'Employee',
  field: 'empId',
  startAt: 1,
  incrementBy: 1
});

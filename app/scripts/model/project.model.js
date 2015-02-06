/**
 * Created by gurushantu on 06-02-2015.
 */

var mongoose = require('mongoose');
Schema = mongoose.Schema;

var ProjectSchema = new Schema({

  name: {type: String, required: True},
  owner: { type: Schema.ObjectId, ref: 'Employee', required: true },
  organization: {type: Schema.ObjectId, ref: 'Organization', required: true},
  totalEmp: Number,
  billableEmp: Number,
  onBenchEmp: Number,
  createdDate: {type: Date, default: Date.now()},
  updatedDate: {type: Date, default: Date.now()}

});

mongoose.model('Project', ProjectSchema);


/**
 * Created by gurushantu on 06-02-2015.
 */

var mongoose = require('mongoose');
Schema = mongoose.Schema;

var OrganizationSchema = new Schema ({
  name: {type: String, require: true},
  owner: {
    type: Schema.ObjectId, ref:'Employee', require: True
  },
  totalEmp: Number,
  billableEmp: Number,
  onBenchEmp: Number,
  createdDate: {type: Date, default: Date.now()},
  updatedDate: {type: Date, default: Date.now()}

});

mongoose.model('Organization', OrganizationSchema);

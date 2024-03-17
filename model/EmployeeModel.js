// models/EmployeeModel.js

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: String,
    required: true
  },
  image: {
    type: String, // Assuming the image will be stored as a URL
    required: true
  },
  name: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  course: {
    type: String,
    required: true
  }
});

const EmployeeModel = mongoose.model('Employee', employeeSchema);

module.exports = EmployeeModel;

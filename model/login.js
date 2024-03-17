// models/LoginModel.js

const mongoose = require('mongoose');

let LoginModel;

try {
  // Check if the model is already defined
  LoginModel = mongoose.model('Login');
} catch (error) {
  // Define the model if it's not already defined
  const loginSchema = new mongoose.Schema({
    sno: {
      type: Number,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  });

  LoginModel = mongoose.model.Login||mongoose.model('Login', loginSchema);
}

module.exports = LoginModel;

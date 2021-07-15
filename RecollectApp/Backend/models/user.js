var express = require('express');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true  },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  
});

module.exports = mongoose.model("tbl_user_basic_data", userSchema);





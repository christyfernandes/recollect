var express = require('express');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const userSchema = mongoose.Schema({
    userId: { type: String, required: true  },
    indexPosition: { type: Number, required: true },
    title: { type: String, required: true },
    details: { type: String, required: true },
    placeholderTitle: { type: String, required: true },
    placeholder: { type: String, required: true },
     reminder:  { type: Number, required: true },
     draft:  { type: Number, required: true },
     trash: { type: Number, required: true }


 
  
});

module.exports = mongoose.model("noteSchema", userSchema);





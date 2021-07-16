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


 
  
});

module.exports = mongoose.model("tbl_note_data", userSchema);





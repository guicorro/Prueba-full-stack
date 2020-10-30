'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentSchema = Schema({
  title: String,
  description: String,
  content: String,
  author: String,
  date: Date,
  archiveDate: Date,
});

module.exports = mongoose.model('Document', DocumentSchema);

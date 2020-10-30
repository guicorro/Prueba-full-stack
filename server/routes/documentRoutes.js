'use strict';

var express = require('express');
var DocumentController = require('../controllers/documentController');

var api = express.Router();

api.get('/documents/news', DocumentController.getNews);
api.get('/documents/archived', DocumentController.getArchived);
api.post('/documents/', DocumentController.create);
api.post('/documents/archive/:id', DocumentController.archive);
api.delete('/documents/:id', DocumentController.deleteDocument);

module.exports = api;

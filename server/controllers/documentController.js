'use strict';

var Document = require('../models/document');

function getNews(req, res) {
  let noDate = new Date(null);
  Document.find({ archiveDate: { $eq: noDate } })
    .sort({ date: -1 })
    .then((documents) => {
      return res.status(200).send(documents);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
}

function getArchived(req, res) {
  let noDate = new Date(null);
  Document.find({ archiveDate: { $ne: noDate } })
    .sort({ date: -1 })
    .then((documents) => {
      return res.status(200).send(documents);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
}

function create(req, res) {
  let newDocument = new Document();
  newDocument.title = req.body.title ? req.body.title : '';
  newDocument.author = req.body.author ? req.body.author : '';
  newDocument.description = req.body.description ? req.body.description : '';
  newDocument.content = req.body.content ? req.body.content : '';
  newDocument.date = new Date();
  newDocument.archiveDate = new Date(null);
  Document.create(newDocument)
    .then((newDocument) => {
      return res.status(200).send(newDocument);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
}

function archive(req, res) {
  let archiveDocument = req.body;
  archiveDocument.archiveDate = Date.now();
  Document.findByIdAndUpdate(req.params.id, archiveDocument, { useFindAndModify: true })
    .then((archivedDocument) => {
      return res.status(200).send(archivedDocument);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
}

function deleteDocument(req, res) {
  var documentId = req.params.id;
  Document.findById({ _id: documentId })
    .deleteOne()
    .then((document) => {
      return res.status(200).send(document);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
}

module.exports = {
  getNews,
  getArchived,
  create,
  archive,
  deleteDocument,
};

'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var config = require('./config');

// Conexion database
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/' + config.mongo.name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.info('Conected to mongodb://' + config.mongo.name + ':' + config.mongo.port + '/' + config.mongo.name);

    // Crear servidor
    app.listen(config.app.port, () => {
      console.info('Server running in http://localhost:' + config.app.port);
    });
  })
  .catch((err) => console.error(err));

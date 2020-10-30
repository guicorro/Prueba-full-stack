'use strict';

module.exports = {
  app: {
    port: process.env.APP_PORT || 8000,
    environment: 'Test',
    name: 'Prueba',
  },
  mongo: {
    port: process.env.DB_PORT || 27017,
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME || 'test',
  },
};

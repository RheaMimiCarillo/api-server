'use strict';

const server = require('./src/server');

require('dotenv').config();

// declare a 'db' that requires the .src/models
const { db } = require('./src/models');

// declare our port
const PORT = process.env.PORT || 3002;

// sync the database 
// db.sync() returns a promise, so we can use .then()
// .then start the and connect to the PORT
// .catch an error if there's some kind of error initializing the db
db.sync()
  .then(() =>
  {
    // start the server on the specified port in the .env
    server.start(PORT);
  })
  .catch(e =>
  {
    // if there are any errors, we can see them here
    console.log(e);
  });

// declare a 'start' that requires the server.js
// before starting the server, make sure the database is set up
//server.start();

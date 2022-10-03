// require express 
'use strict'


// bring in express
const express = require('express');

const logger = require('./middleware/logger.js');

//const validator = require('./middleware/validator.js');



// instead of creating an `app`, we're creating a `router`
// we can attach this router to our sequelize singleton
// make an instance of express() called 'app;
const app = express();

// import coffee router
const coffeeRouter = require('./routes/coffee.js');

// import food router
const foodRouter = require('./routes/food.js');

const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');

// import json thing to attach JSON body to the `request` body
app.use(express.json());

app.use(logger);

//app.use(cors());

// use the coffee router and have the coffee router itself specify the endpoints
app.use(coffeeRouter);

app.use(foodRouter);

// make a app.post /message endpoint
// this function makes a new record in the database


// server routes
app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server');
});

// star route 404 error
app.get('*', notFound);
// 500 error
app.use(serverError);

// export the app
module.exports = {
  start: (port) =>
  {
    app.listen(port, () =>
    {
      console.log('listening on port: ' + port);
    })
  },
  app,
}

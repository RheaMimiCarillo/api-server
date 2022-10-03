'use strict';

// import `sequelize` and `DataTypes`

// set `DATABASE_URL`  to be either the database URL in the .env, or to be "sqlite:memory", to be a sql server that runs in memory
// use "sqlite::memory" (double colons), so that the `memory` file doesn't persist after testing

// make a messageSchema variable that's required from the messages.js

// declare a `sequelize` variable as a new instance of the Sequelize class

// declare a MessagesModel as a new instance of the messageSchema


// import the coffeeSchema model
const coffeeSchema = require('./coffee.js');

// import foodSchema model
const foodSchema = require('./food.js');

// import Collection class
const Collection = require('./collection-class.js');

// initialize the sequelize thing

const { Sequelize, DataTypes } = require('sequelize');



// set DATABASE as either the URL of the database in the .env file, or make one in memory that doesn't persist
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';

// instantiate a new sequelize instance
// we have a strict requirement to have one instance (singleton) of our sequelize database
let sequelize = new Sequelize(DATABASE_URL);

// use coffeeSchema by passing in the instance of `sequelize` as well as the 'special DataTypes thing' that we imported
// the 'special DataTypes thing' does translation between JavaScript datatypes to SQL datatypes 
const CoffeeModel = coffeeSchema(sequelize, DataTypes);

const FoodModel = foodSchema(sequelize, DataTypes);

module.exports =
{
  // export the coffee model as 'Coffee' with the Collection class
  Coffee: new Collection(CoffeeModel),
  // export the food model as 'Food' with the Collection class
  Food: new Collection(FoodModel),
  // export a sql table as `db`
  db: sequelize,
}

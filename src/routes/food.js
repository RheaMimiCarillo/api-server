'use strict'


// bring in express
const express = require('express');

// bring in just the Coffee object we exported from server.js
const { Food } = require('../models');

// instead of creating an `app`, we're creating a `router`
// we can attach this router to our sequelize singleton
const router = express.Router();


// lab requires 5 routes:
// 2 gets, 1 post, and 1 delete

// get all 
router.get('/food', getFood);

// get one food record, by `id`
router.get('/food:id', readOneFood);

// make a new record
router.post('/food', createFood);

// update a record, by `id`
router.put('/food:id', updateFood);

// delete a record, by `id`
router.delete('/food:id', deleteFood);


// standalone callbacks, so things are compartmentalized

async function getFood(req, res, next)
{
  let foodRecords = await Food.read();
  res.status(200).send(foodRecords);
}


async function readOneFood(req, res, next) {
  let foodRecord = await Food.read(req.params.id);
  res.status(200);
  res.send(coffeeRecord);
}

async function createFood(req, res, next)
{
  // create a food record from the request's body
  let foodRecord = await Food.create(req.body);

  // set status as 200 and send the created food record to the client
  res.status(200).send(foodRecord);
}

async function updateFood(req, res, next)
{
  let foodRecord = await Food.update(req.params.id, req.body)

  res.status(200).send(foodRecord)
}

async function deleteFood(req,res,next)
{
  let deletedFood = await Food.delete(req.params.id);
  res.status(200).send(deletedFood);
}

module.exports = router;

'use strict'


// bring in express
const express = require('express');

// bring in just the Coffee object we exported from server.js
const { Coffee } = require('../models');

// instead of creating an `app`, we're creating a `router`
// we can attach this router to our sequelize singleton
const router = express.Router();


// lab requires 5 routes:
// 2 gets, 1 post, and 1 delete

// get all 
router.get('/coffee', getCoffee);

// get one coffee record, by `id`
router.get('/coffee:id', readOneCoffee);

// make a new record
router.post('/coffee', createCoffee);

// update a record, by `id`
router.put('/coffee:id', updateCoffee);

// delete a record, by `id`
router.delete('/coffee:id', deleteCoffee);


// standalone callbacks, so things are compartmentalized

async function getCoffee(req, res, next)
{
  let coffeeRecords = await Coffee.read();
  res.status(200).send(coffeeRecords);
}


async function readOneCoffee(req, res, next) {
  let coffeeRecord = await Coffee.read(req.params.id);
  res.status(200);
  res.send(coffeeRecord);
}

async function createCoffee(req, res, next)
{
  // create a coffee record from the request's body
  let coffeeRecord = await Coffee.create(req.body);

  // set status as 200 and send the created coffee record to the client
  res.status(200).send(coffeeRecord);
}

async function updateCoffee(req, res, next)
{
  let coffeeRecord = await Coffee.update(req.params.id, req.body)

  res.status(200).send(coffeeRecord)
}

async function deleteCoffee(req,res,next)
{
  let deletedCoffee = await Coffee.delete(req.params.id);
  res.status(200).send(deletedCoffee);
}

module.exports = router;

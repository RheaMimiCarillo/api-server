'use strict';

function logger(req, res, next)
{
  console.log("REQUEST METHOD: " + req.method, "REQUEST PATH: " + req.path);
  next();
}

module.exports = logger;

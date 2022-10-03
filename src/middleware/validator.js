'use strict';

// require that a request have a .body attached
function validator(request, response, next)
{
  if (request.body)
  {
    next();
  } 
  else
  {
    // expresses way of throwing an error.
    next('No body on request');
  }
};

module.exports = validator;

'use strict';

const serverError = (error, request, response, next)=>{
  console.log(error);
  response.status(500);
  response.send('Internal Server Error');
};

module.exports = serverError;

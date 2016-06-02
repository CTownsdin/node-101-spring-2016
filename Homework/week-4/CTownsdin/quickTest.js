'use strict';
const solutionRun = require('./solution.js').run;
const search_response_str = JSON.stringify(require('../search_response'));

// call the solutionRun passing in a jsonString and getting back the aHotel object
console.log( solutionRun(search_response_str));  // aHotel object


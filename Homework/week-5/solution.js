'use strict';

let getHotels = require('./getHotels');  // getHotels = (jsonString) => hotels
let getSearchResults = require('./getSearchResults');  // (callback) -> calls CB, with data

//  THIS callback is being put into this run function by test.js, 1 testCallback for each type of function.
//   function testCallback(err) {
//     if (err && err.message && err.message === 'BAD JSON') {
// ... etc etc 
module.exports.run = function(testCallback){    // test will call this solution.run function, passing in a callback as it's first param
    
    getSearchResults(function handleJSONString(jsonString){
        
        try {
            let hotels = getHotels(jsonString);  
            testCallback(null, hotels);
        }
        catch(error) {  // handle that error using testCallback
            testCallback(error, null);  
        }
        
    });
    
};

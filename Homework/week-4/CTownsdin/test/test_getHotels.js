// smoke test the mocha baby!
'use strict';

const expect        = require("chai").expect;
const getHotels     = require("../getHotels");

describe('getHotels...', function() {

    describe('...for JSON without a hotelList in it...', function() {
        
        it('returns something with a length of 0', function() {
            let barelyJSONString = '{ "barely valid": "json" }';    
            expect( getHotels(barelyJSONString).length ).to.equal(0);                
        });
        
        it('returns an empty []', function() {
            let barelyJSONString = '{ "barely valid": "json" }';    
            expect( getHotels(barelyJSONString) ).to.eql([]);
        });        

    });

});
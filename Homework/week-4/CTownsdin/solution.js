'use strict';

module.exports.run = function(jsonString) { 
    
    let json;
    
    try {  json = JSON.parse(jsonString); } 
    catch (error) { throw new TypeError('BAD JSON'); }
    
    // return an array of hotel objects
    let hotels = [];
    
    if (json.hotelList === undefined){ return []; }
    
    json.hotelList.forEach(function(v,i,a){
        hotels.push(
            {                    
                "id": v.hotelId,
                "name": v.name,
                "hotelAddress": {
                    "address": v.address,
                    "city": v.city,
                    "state": v.stateProvinceCode,
                    "country": v.countryCode,
                    "postalCode": v.postalCode,
                },
                "starRating": v.hotelStarRating,
                "guestRating": v.hotelGuestRating,
                "description": v.shortDescription         
            }  
        );
    });
       
    return hotels;
};

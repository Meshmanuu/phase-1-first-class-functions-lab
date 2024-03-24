// Code your solution in this file!
// index.js

// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier function
  const createFareMultiplier = function(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  };
  
  // fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  const selectDifferentDrivers = function(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  };
  
  module.exports = { returnFirstTwoDrivers, returnLastTwoDrivers, selectingDrivers, createFareMultiplier, fareDoubler, fareTripler, selectDifferentDrivers };
  
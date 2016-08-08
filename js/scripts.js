var gallons = parseInt(prompt("Enter the measurement in gallons"));
var cups = parseInt(prompt("Enter the measurment in cups"));
var tablespoons = parseInt(prompt("Enter the measurment in tablespoons"));
var pints = parseInt(prompt("Enter the measurment in pints"));
var quarts = parseInt(prompt("Enter the measurement in quarts"));
var ounces = parseInt(prompt("Enter the measurment in ounces"));


var gallonsToLiters = function(value) {
  return value * 3.785411784;
};

var litersToOunces = function(value) {
  return value * 3.785411784;
};

var quartsToOunces = function(value) {
  return value * 32;
};

var ouncesToGrams = function(value) {
  return value * 28.3495;
};

var cupsToTablespoons = function(value) {
  return value * 16;
};

var tablespoonsToMl = function(value) {
  return value * 15;
};

var pintsToCups = function(value) {
  return value * 2;
};


alert(gallonsToLiters(gallons));
alert(litersToOunces(liters));
alert(quartsToOunces(quarts));
alert(ouncesToGrams(ounces));
alert(cupsToTablespoons(cups));
alert(tablespoonsToMl(tablespoons));
alert(pintsToCups(pints));

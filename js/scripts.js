var gallons = parseInt(prompt("Enter the measurement in gallons"));
var gallonsToLiters = function(value) {
  return value * 3.785411784;
};
alert (gallons + " gallons is equal to " + (gallonsToLiters(gallons)) + " liters.");

var cups = parseInt(prompt("Enter the measurement in cups"));
var cupsToTablespoons = function(value) {
  return value * 16;
};
alert(cups + " cups is equal to " + (cupsToTablespoons(cups)) + " tablespoons.");

var tablespoons = parseInt(prompt("Enter the measurement in tablespoons"));
var tablespoonsToMl = function(value) {
  return value * 15;
};
alert(tablespoons + " tablespoons is equal to " + (tablespoonsToMl(tablespoons)) + " milliliters.");


var pints = parseInt(prompt("Enter the measurement in pints"));
var pintsToCups = function(value) {
  return value * 2;
};
alert(pints + " pints is equal to " + (pintsToCups(pints)) + " cups.");


var quarts = parseInt(prompt("Enter the measurement in quarts"));
var quartsToOunces = function(value) {
  return value * 32;
};
alert (quarts + " quarts is equal to " + (quartsToOunces(quarts)) + " ounces.");


var ounces = parseInt(prompt("Enter the measurement in ounces"));
var ouncesToGrams = function(value) {
  return value * 28.3495;
};
alert(ounces + " ounces is equal to " + (ouncesToGrams(ounces)) + " grams.");


var litersToOunces = function(value) {
  return value * 3.785411784;
};
var liters = parsInt(prompt("Enter the measurement in liters"));
alert(liters + " liters is equal to " + (litersToOunces(liters)) + " ounces.");

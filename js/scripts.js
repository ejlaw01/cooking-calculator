var gallons = parseInt(prompt("Enter the measurement in gallons"));

var liters = function(gals) {
  return gals * 3.785411784;
};

alert(liters(gallons));


var ounces = parseInt(prompt("Enter the measurement in ounces"));

var grams = function(oz) {
  return oz * 28.3495;
};

alert(grams(oz));

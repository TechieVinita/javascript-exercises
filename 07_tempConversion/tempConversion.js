const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * 5/9;
  return +cTemp.toFixed(1);
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = cTemp * 9/5 + 32;
  return +fTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

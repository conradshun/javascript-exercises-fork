const convertToCelsius = function(tempFahrenheit) {

let convertedTemp = (tempFahrenheit-32)/1.8;
let result = Math.round(convertedTemp*10)/10;
return result;

};

const convertToFahrenheit = function(tempCelsius) {

  let convertedTemp = (tempCelsius*1.8)+32;
  let result = Math.round(convertedTemp*10)/10;

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

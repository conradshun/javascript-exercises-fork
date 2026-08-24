const leapYears = function(year) {

let divisorby4 = 4;
let divisorby100 = 100;

if(year % divisorby100 == 0){
    return false;
}else if(year % divisorby4 == 0){
    return true;
}

};

// Do not edit below this line
module.exports = leapYears;

const removeFromArray = function(array, ...args) {

    //create an empty array
    const newArray = [];
    //sorts through the array
    array.forEach((item) => {
        //if there is no element included in the array continue unless
        if(!args.includes(item)){
            newArray = array.push(item);
        }
        })


};

// Do not edit below this line
module.exports = removeFromArray;

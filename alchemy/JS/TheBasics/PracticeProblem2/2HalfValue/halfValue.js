// Half Value
// Your goal in this challenge will be to halve every number in the array.

// For odd numbers, round up!

// Examples:

// console.log( halfValue([2,2,2]) ); // [1,1,1]
// console.log( halfValue([3,4,5]) ); // [2,2,3]

function halfValue(numbers){
    let halfArray = [];
    for(let i = 0; i < numbers.length; i++){
        halfArray[i] = Math.round(numbers[i] / 2);
             


        }

        return halfArray;
    }




module.exports = halfValue;



// Your Goal: Halve 'em! 
// The function halfValue takes an array of numbers. It should return a new array with all the original values halved.

// Odd numbers should be rounded up to the nearest whole number.
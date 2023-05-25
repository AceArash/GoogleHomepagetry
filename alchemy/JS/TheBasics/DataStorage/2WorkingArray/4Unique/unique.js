function unique(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        if(newArray.indexOf(element) === -1){
            newArray.push(element);
        }
    }
    return newArray;


}

module.exports = unique;


// Returning a New Array
// When writing a function to filter an array, we can create a new array and push the elements into that new array when they satisfy our condition.

// Let's say we want to want to filter an array to return only numbers greater than 5:

// function greaterThanFive(array) {
//     const newArray = [];
//     for(let i = 0; i < array.length; i++) {
//         const element = array[i];
//         // is this element greater than 5?
//         if(element > 5) {
//             // yes, push this element on our array
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

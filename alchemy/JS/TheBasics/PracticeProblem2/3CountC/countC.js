// Your Goal: Count the C's
// The function countC takes a string str as its only argument.
// This function should return the number of c's found in the string. It must count both lower-case c and upper-case C.

function countC(str){
    let totalC = 0;
    for(let i = 0; i < str.length; i++){
        if(countC[str] === "c" || countC[str]  === "C"){
            totalC += 1;
        }
    }
    return totalC;
    

}

module.exports = countC;
/*
for ([initialization]; [condition]; [update]) {
   statement
}
*/

function scream(n){
    let scream = "";
    for(let i = 0; i < n ; i++) {

        scream += "a";

    }
    return scream;
}
module.exports = scream;
function startsWithX(string) {
    if(string[0].toLowerCase() === "x") {
        return true;
    }
    return false;
}

module.exports = startsWithX;


// Let's update our startsWithX function to return true for an upper-case X as well as a lower-case x.

//  Some examples!

// console.log( startsWithX("Xylophones") ); // true
// console.log( startsWithX("x") ); // true
// console.log( startsWithX("spaceX") ); // false
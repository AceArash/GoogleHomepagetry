function smallerNumber(num1, num2){
    if(num1 > num2){
        return num2;
    } else {
        return num1;
    }   

}
console.log(smallerNumber(3,5));
module.exports = smallerNumber;

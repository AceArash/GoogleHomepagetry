function sumEven(array) {
    let sumOfEven = 0;
    for(let i = 0; i < array.length; i++ ){
        if(array[i] /2 === 0){
            sumOfEven += array[i];

        }
        
    }
    return sumOfEven;
    
}

module.exports = sumEven;
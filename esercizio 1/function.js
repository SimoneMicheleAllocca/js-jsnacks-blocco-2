function generateArray (){
    let nArray = [];

    for (let i = 0; i < 10; i++){
        let numberInArray = getRndInteger(1, 100);

        nArray.push(numberInArray);
    }
    return nArray
}


function getRndIteger(min , max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function printArray(arrayToPrint){
    
}
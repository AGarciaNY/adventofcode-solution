import data from "../test.js";

let frequency = 0;

let arrayOfStringNumbers = data.split('\n');

for(let i= 0; i < arrayOfStringNumbers.length; i++){
    let currentString = arrayOfStringNumbers[i];
    if(currentString[0] === '-'){
        frequency -= Number(currentString.slice(1));
    }else{
        frequency += Number(currentString.slice(1));
    };
}

console.log(frequency)
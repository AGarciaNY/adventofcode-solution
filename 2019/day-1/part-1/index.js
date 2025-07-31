import data from "../test.js";

let numberArray = data.split('\n').map((num) => Number(num));

let sum = 0;

for(let i = 0; i < numberArray.length; i++){
    let fuelRequirement = Math.floor(numberArray[i]/3) - 2;
    sum += fuelRequirement;
}
console.log(sum)
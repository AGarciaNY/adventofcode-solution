import data from "./data.js";
let numberArray = data.split(',').map((num) => ~~num);
let code;
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === 1) {
        let numberOne = numberArray[numberArray[i + 1]];
        let numberTwo = numberArray[numberArray[i + 2]];
        numberArray[numberArray[i + 3]] = numberOne + numberTwo
        code = numberArray[numberArray[i + 3]]
        i += 3
    } else if (numberArray[i] === 2) {
        numberArray[i + 3]
        let numberOne = numberArray[numberArray[i + 1]];
        let numberTwo = numberArray[numberArray[i + 2]];
        numberArray[numberArray[i + 3]] = numberOne * numberTwo;
        code = numberArray[numberArray[i + 3]];
        i += 3;
    } else if (numberArray[i] === 99) {
        break
    }
}

console.log(code)
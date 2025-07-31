let arrayOfNumbers = data.split("\n").map((stringNum) => Number(stringNum));
let result = null;
for (let i = 0; i < arrayOfNumbers.length; i++) {
    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
        if (arrayOfNumbers[i] + arrayOfNumbers[j] === 2020) {
            result = arrayOfNumbers[i] * arrayOfNumbers[j];
            break
        }
    }
}
console.log(result)
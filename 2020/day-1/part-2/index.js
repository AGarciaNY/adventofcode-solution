let arrayOfNumbers = data.split("\n").map((stringNum) => Number(stringNum));
let result = null;
for (let i = 0; i < arrayOfNumbers.length; i++) {
    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
        for (let x = j + 1; x < arrayOfNumbers.length; x++) {
            if (arrayOfNumbers[x] + arrayOfNumbers[i] + arrayOfNumbers[j] === 2020) {
                result = arrayOfNumbers[i] * arrayOfNumbers[j] * arrayOfNumbers[x];
                break
            }
        }
    }
}
console.log(result)
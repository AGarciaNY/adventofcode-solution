import data from "./data.js";
// let data = `abcde
// fghij
// klmno
// pqrst
// fguij
// axcye
// wvxyz
// `
let separateStrings = data.split('\n');
let wordFound;
let indexToRemove;
for (let i = 0; i < separateStrings.length; i++) {
    let currentString = separateStrings[i];

    for (let j = i; j < separateStrings.length; j++) {
        let compareString = separateStrings[j];
        let differences = 0;
        let index = null
        for (let stringIndex = 0; stringIndex < currentString.length; stringIndex++) {
            if (currentString[stringIndex] !== compareString[stringIndex]) {
                differences++;
                index = stringIndex;
            }
            if (differences > 1) break;
        }
        if (differences === 1) {
            wordFound = currentString;
            indexToRemove = index;
            break;
        }

    }
}
let stringArray = wordFound.split("");
stringArray.splice(indexToRemove,1);

console.log(stringArray.join(""));
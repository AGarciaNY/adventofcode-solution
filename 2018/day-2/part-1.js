import data from "./data.js";
// let data = `abcdef
// bababc
// abbcde
// abcccd
// aabcdd
// abcdee
// ababab`;

let separateStrings = data.split('\n');
let twoLetterCount = 0;
let threeLetterCount = 0;
for (let i = 0; i < separateStrings.length; i++) {
    let currentString = separateStrings[i];
    let traker = {};
    for (let j = 0; j < currentString.length; j++) {
        let letter = currentString[j];
        if (letter in traker) {
            traker[letter] += 1;
        } else {
            traker[letter] = 1;
        };
    };

    let hasTwo = false;
    let hasThree = false;
    for (let key in traker) {
        if (traker[key] === 2) {
            hasTwo = true;
        } else if (traker[key] === 3) {
            hasThree = true;
        }
    }
    if (hasTwo) {
        twoLetterCount++;
    }
    if (hasThree) {
        threeLetterCount++;
    }
};
console.log(twoLetterCount * threeLetterCount);
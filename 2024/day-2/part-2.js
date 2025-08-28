import data from "./data.js";
// let data = `7 6 4 2 1
// 1 2 7 8 9
// 9 7 6 2 1
// 1 3 2 4 5
// 8 6 4 4 1
// 1 3 6 7 9`;

let newdata = data.split("\n").map((x) => {
    return x.split(" ").map((num) => ~~num);
});

let amountOfSafe = 0;

for (let i = 0; i < newdata.length; i++) {
    let currentLevel = newdata[i];
    if (checkIfSafe(currentLevel)) {
        amountOfSafe++;
    } else {
        let index = 0;
        while (index < currentLevel.length) {
            let currentString = [...[...currentLevel].splice(0, index), ...[...currentLevel].splice(index + 1, currentLevel.length)];
            if (checkIfSafe(currentString)) {
                amountOfSafe++;
                break;
            }
            index++;
        }
    }
}
console.log(amountOfSafe)

function checkIfSafe(string) {
    let isIncreasing = null;
    for (let j = 1; j < string.length; j++) {
        let difference = string[j - 1] - string[j];
        if (difference > 0 && difference < 4) {
            if (isIncreasing === null) {
                isIncreasing = true;
            } else if (isIncreasing === false) {
                return false;
                break;
            }

        } else if (difference < 0 && difference > -4) {
            if (isIncreasing === null) {
                isIncreasing = false;
            } else if (isIncreasing === true) {
                return false;
                break;
            }

        } else {
            return false;
            break;
        }
    }
    return true;
}
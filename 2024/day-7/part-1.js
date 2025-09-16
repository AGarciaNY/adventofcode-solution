import data from "./data.js";

// let data = `190: 10 19
// 3267: 81 40 27
// 83: 17 5
// 156: 15 6
// 7290: 6 8 6 15
// 161011: 16 10 13
// 192: 17 8 14
// 21037: 9 7 18 13
// 292: 11 6 16 20`;


let splitRows = data.split("\n").map((row) => row.split(": "));


function checkposibility(goal, sum, [...list]) {
    // cons
    if (list.length === 0 && sum === goal) {
        return true;
    } else if (list.length === 0) {
        return false;
    };
    let solutionFound = false;
    let currentNum = list.shift();

    //add
    let adding = checkposibility(goal, sum + currentNum, list);

    if (adding) {
        solutionFound = true;
        return true;
    };

    // multiply

    let multiply = checkposibility(goal, sum * currentNum, list);
    if (multiply) {
        solutionFound = true;
        return true;
    }
    return solutionFound;
};

function checkRow(target, numbers) {
    let listOfNumbers = numbers.split(" ").map((num) => Number(num));
    let sum = listOfNumbers.shift();
    let result = checkposibility(Number(target), sum, listOfNumbers);
    return result;
};

let sum = 0;
for (let i = 0; i < splitRows.length; i++) {
    let result = checkRow(splitRows[i][0], splitRows[i][1]);
    if (result === true) sum += Number(splitRows[i][0]);
}
console.log(sum)
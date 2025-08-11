import data from "./data.js";
/*
variables 
a => rock
b => paper
c => scissors

x => rock
y => paper
z => scissors

for picking:
rock 1
paper 2
scissors 3

*/



// let data = `A Y
// B X
// C Z`;



let myChoicePoint = {
    "X": 0,
    "Y": 3,
    "Z": 6
}

let toWin = {
    "A": 2,
    "B": 3,
    "C": 1
};

let toDraw = {
    "A": 1,
    "B": 2,
    "C": 3
}
let toLoose = {
    "A": 3,
    "B": 1,
    "C": 2
}

let rounds = data.split('\n');
let myPoints = 0;

for (let i = 0; i < rounds.length; i++) {
    let elfCurrentChoice = rounds[i][0];
    let outcome = rounds[i][2];
    if (outcome === "X") {
        myPoints += toLoose[elfCurrentChoice];
    } else if (outcome === "Y") {
        myPoints += toDraw[elfCurrentChoice];
    } else {
        myPoints += toWin[elfCurrentChoice];
    }
    myPoints += myChoicePoint[outcome];
};

console.log(myPoints);
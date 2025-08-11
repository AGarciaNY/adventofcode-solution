let myChoicePoint = {
    "X": 1,
    "Y": 2,
    "Z": 3
}

let rounds = data.split('\n');

function determineWhoWon(elfChoice, myChoice) {
    if (myChoice === "X" && elfChoice === "C") {
        return 6;
    } else if (myChoice === "Y" && elfChoice === "A") {
        return 6;
    } else if (myChoice === "Z" && elfChoice === "B") {
        return 6;
    } else if (myChoice === "X" && elfChoice === "A" || myChoice === "Y" && elfChoice === "B" || myChoice === "Z" && elfChoice === "C") {
        return 3;
    }
    return 0;
}

let myPoints = 0
for (let i = 0; i < rounds.length; i++) {
    let elfCurrentChoice = rounds[i][0]
    let myCurrentChoice = rounds[i][2]
    let currentPoints = 0
    currentPoints += determineWhoWon(elfCurrentChoice, myCurrentChoice)
    currentPoints += myChoicePoint[myCurrentChoice]
    myPoints += currentPoints
}

console.log(myPoints)
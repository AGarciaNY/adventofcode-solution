import data from "./data.js";

/*
1. seprate game num \n : ; ,

2. determine how mush green, red, and blue.

3. get game id sum and add it to all sums
*/


let gameSeparation = data.split("\n");
let gamePullsSepration = gameSeparation.map((games) => games.split(":"));
let pullSepration = gamePullsSepration.map((games) => games[1].split(";"));

let redRe = /([0-9]+) red/g;
let greebRe = /([0-9]+) green/g;
let blueRe = /([0-9]+) blue/g;


// console.log(pullSepration[0]);
let maxRed = 12;
let maxGreen = 13;
let maxBlue = 14;

let gameSum = 0;
for (let i = 0; i < pullSepration.length; i++) {
    let currentGame = pullSepration[i];
    let gameCounts = true;
    for (let j = 0; j < currentGame.length; j++) {
        let redFound = currentGame[j].match(redRe);
        let greenFound = currentGame[j].match(greebRe);
        let blueFound = currentGame[j].match(blueRe);
        if (redFound != null) {
            console.log(Number([...redFound[0].match(/([0-9]+)/g)][0]));
            if (Number([...redFound[0].match(/([0-9]+)/g)][0]) > maxRed) {
                console.log(redFound[0]);
                gameCounts = false;
                break;
            }
        }
        if (greenFound != null) {
            if (Number([...greenFound[0].match(/([0-9]+)/g)][0]) > maxGreen) {
                gameCounts = false;
                break;
            }
        }
        if (blueFound != null) {
            if (Number([...blueFound[0].match(/([0-9]+)/g)][0]) > maxBlue) {
                gameCounts = false;
                break;
            }
        }
    }
    if (gameCounts) {
        gameSum += i+1;
    }
}
console.log(gameSum);
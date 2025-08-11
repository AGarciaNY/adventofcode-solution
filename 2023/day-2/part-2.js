import data from "./data.js";

/*
1. seprate game num \n : ; ,

2. determine how mush green, red, and blue.

3. get game id sum and add it to all sums
*/
// let data = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

let gameSeparation = data.split("\n");
let gamePullsSepration = gameSeparation.map((games) => games.split(":"));
let pullSepration = gamePullsSepration.map((games) => games[1].split(";"));

let redRe = /([0-9]+) red/g;
let greebRe = /([0-9]+) green/g;
let blueRe = /([0-9]+) blue/g;

let minSum = 0;
for (let i = 0; i < pullSepration.length; i++) {
    let currentGame = pullSepration[i];
    let gameCounts = true;
    let redMin = 1;
    let greenMin = 1;
    let blueMin = 1;
    for (let j = 0; j < currentGame.length; j++) {
        let redFound = currentGame[j].match(redRe);
        let greenFound = currentGame[j].match(greebRe);
        let blueFound = currentGame[j].match(blueRe);
        if (redFound != null) {
            let redBallPull = Number([...redFound[0].match(/([0-9]+)/g)][0]);
            if (redBallPull > redMin) {
                redMin = redBallPull;
            }
        }
        if (greenFound != null) {
            let greenBallPull = Number([...greenFound[0].match(/([0-9]+)/g)][0]);
            if (greenBallPull > greenMin) {
                greenMin = greenBallPull;
            }
        }
        if (blueFound != null) {
            let blueBallPull = Number([...blueFound[0].match(/([0-9]+)/g)][0]);
            if (blueBallPull > blueMin) {
                blueMin = blueBallPull;
            }
        }
    }
    minSum += (redMin * blueMin * greenMin);
}
console.log(minSum);
import data from "./data.js"
// let data = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
// Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
// Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
// Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
// Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
// Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;


let sortedData = data.split("\n").map((row) => {
    let numbers = row.split(":")[1].split("|");
    return numbers;
})

let sum = 0
for (let i = 0; i < sortedData.length; i++) {
    let luckyNumber = sortedData[i][0].trim().split(/\s+/);
    let myNumers = sortedData[i][1].trim().split(/\s+/);

    let luckyNumberSet = new Set();
    let numberCounted = new Set()
    let points = 0;

    for (let j = 0; j < luckyNumber.length; j++) {
        luckyNumberSet.add(luckyNumber[j]);
    }

    for (let j = 0; j < myNumers.length; j++) {
        if (luckyNumberSet.has(myNumers[j]) && !numberCounted.has(myNumers[j])) {
            if (points === 0) {
                points = 1;
            } else {
                points *= 2;
            };
            numberCounted.add(myNumers[j])
        };
    };

    console.log(points, "ahsdiuahudiohui", myNumers);
    sum += points;
}


console.log(sortedData, sum);



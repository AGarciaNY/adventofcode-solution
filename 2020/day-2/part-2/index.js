let dataArray = data.split("\n").map((set) => {
    let currentString2 = set.split(" ")

    let appearance = currentString2[0].split("-").map((stringnum) => Number(stringnum))
    let target = currentString2[1][0]
    let string = currentString2[2]
    return [appearance, target, string]
})


let goodPasswordCount = 0
for (let i = 0; i < dataArray.length; i++) {
    let count = 0;
    let indexOne = dataArray[i][0][0] - 1
    let indexTwo = dataArray[i][0][1] - 1
    let target = dataArray[i][1]
    let currentCodeString = dataArray[i][2]
    if (currentCodeString[indexOne] === target && currentCodeString[indexTwo] !== target || currentCodeString[indexOne] !== target && currentCodeString[indexTwo] === target) {
        goodPasswordCount++
    }
}

console.log(goodPasswordCount)
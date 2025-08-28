import data from "./data.js";
// let data = `47|53
// 97|13
// 97|61
// 97|47
// 75|29
// 61|13
// 75|53
// 29|13
// 97|29
// 53|29
// 61|53
// 97|53
// 61|29
// 47|13
// 75|47
// 97|75
// 47|61
// 75|61
// 47|29
// 75|13
// 53|13

// 75,47,61,53,29
// 97,61,53,29,13
// 75,29,13
// 75,97,47,61,53
// 61,13,29
// 97,13,75,29,47`


let splitByRow = data.split("\n")

let rulls = {};
let updateIndex = null;
for (let i = 0; i < splitByRow.length; i++) {

    let currentRull = splitByRow[i];
    if (currentRull === "") {
        updateIndex = i + 1;
        break;
    }
    let [num1, num2] = currentRull.split("|")
    if (num1 in rulls) {
        rulls[num1].add(num2);
    } else {
        rulls[num1] = new Set();
        rulls[num1].add(num2);
    };
};
console.log(rulls);
let sum = 0


function sortList(list){
    return list.sort((a, b) => {
        // if a must come before b
        if (rulls[a] && rulls[a].has(b)) return -1;
        // if b must come before a
        if (rulls[b] && rulls[b].has(a)) return 1;
        return 0;
    });
}

for (let i = updateIndex; i < splitByRow.length; i++) {
    let checkList = splitByRow[i].split(",");
    let currentNumbers = new Set();
    let canUpdate = true;

    for(let j = 0; j < checkList.length; j++){
        let currentSet = rulls[checkList[j]];
        // number has no rull
        if(currentSet === undefined) {
            currentNumbers.add(checkList[j]);
            continue;
        };
        // check if rulls is being followed
        for(let num of currentSet){
            if(currentNumbers.has(num)){
                canUpdate = false;
                break;
            }
        }
        // add current num to list
        currentNumbers.add(checkList[j]);
    }
    if(!canUpdate){
        let sortedList =  sortList(checkList)
        sum += Number(sortedList[Math.floor(sortedList.length/2)])
    }
}
console.log(sum)
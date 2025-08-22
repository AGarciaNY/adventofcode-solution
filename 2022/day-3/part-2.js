import data from "./data.js";
// let data = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`

const stringArray = data.trim().split("\n");

let sum = 0;

for (let i = 0; i < stringArray.length; i += 3) {
    const line1 = stringArray[i]
    const line2  = stringArray[i+1]
    const line3  = stringArray[i+2]

    const set1 = new Set(line1);
    const set2 = new Set(line2);
    const set3 = new Set(line3);

    let match = null;
    for (const ch of set1) {
        if (set2.has(ch) && set3.has(ch)) {
            match = ch;
            break;
        }
    }

    let priority = 0
    if (match >= 'a' && match <= 'z') {
        priority += match.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    } else if (match >= 'A' && match <= 'Z') {
        priority += match.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
    }

    sum += priority;
}

console.log( sum);
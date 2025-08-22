import data from "./data.js";
// let data = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`
let stringData = data.split("\n")
let sum = 0;


for (let i = 0; i < stringData.length; i++) {
    const line = stringData[i];
    const half = line.length / 2;

    const fistHalf = line.slice(0, half);
    const secondHalf = line.slice(half);

    const set1 = new Set(fistHalf);
    let match = null;

    for (let j = 0; j < secondHalf.length; j++) {
        const ch = secondHalf[j];
        if (set1.has(ch)) {
            match = ch;
            break;
        }
    }

    let priority = 0;
    if (match >= "a" && match <= "z") {
        priority += match.charCodeAt(0) - "a".charCodeAt(0) + 1;
    } else if (match >= "A" && match <= "Z") {
        priority += match.charCodeAt(0) - "A".charCodeAt(0) + 27;
    }

    sum += priority;
}

console.log(sum)
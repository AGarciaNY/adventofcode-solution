let string = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`

let re = /mul\(([0-9]+),([0-9]+)\)/g;
let muls = [...string.matchAll(re)];
// console.log(muls)
let reDont = /don't\(\)/g;
let dont = [...string.matchAll(reDont)];

let reDo = /do\(\)/g;
let dos = [...string.matchAll(reDo)];


let currentDontIndex = dont[0].index;
let currentDoIndex = dos[0].index;
let indexChange = [];
let lookingForIndex = true;

let dontIndex = 0;
let dosIndex = 0;

if (dont[dontIndex].index !== 0 && dos[dosIndex].index !== 0) {
    indexChange.push([0, true])
}
while (lookingForIndex) {
    if (dontIndex >= dont.length && dosIndex >= dos.length) {
        lookingForIndex = false;
    } else if (dontIndex >= dont.length) {
        indexChange.push([dos[dosIndex].index, true]);
        dosIndex++;
    } else if (dosIndex >= dos.length) {
        indexChange.push([dont[dontIndex].index, false]);
        dontIndex++;
    } else if (dont[dontIndex].index < dos[dosIndex].index) {
        indexChange.push([dont[dontIndex].index, false]);
        dontIndex++;
    } else {
        indexChange.push([dos[dosIndex].index, true]);
        dosIndex++;
    }
}

console.log(indexChange)
let currentChange = 0;
let canAdd = indexChange[0][1]
let nextChnage = indexChange[currentChange + 1][0]
let sum = 0;

for (let i = 0; i < muls.length; i++) {
    // console.log(nextChnage, muls[i].index, sum)
    if (nextChnage <= muls[i].index) {
        currentChange++;
        canAdd = indexChange[currentChange][1];
        
        if (currentChange+1 >= indexChange.length) {
            nextChnage = string.length
        } else {
            nextChnage = indexChange[currentChange + 1][0];
        }

    }
    if (canAdd) {
        let numOne = Number(muls[i][1]);
        let numTwo = Number(muls[i][2]);
        sum += numOne * numTwo;
    }
}

console.log(sum)
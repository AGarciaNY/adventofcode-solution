let string = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`

let re = /mul\(([0-9]+),([0-9]+)\)/g;
let muls = [...string.matchAll(re)];
// console.log(muls)
let reDont = /don't\(\)/g;
let dont = [...string.matchAll(reDont)];

let reDo = /do\(\)/g;
let dos = [...string.matchAll(reDo)];

// console.log(dont,dos)
let sum = 0;
let currentDontIndex = dont[0].index;
let currentDoIndex = dos[0].index;
let canAdd = true
for (let i = 0; i < muls.length; i++) {
    




    if (canAdd) {
        let numOne = Number(muls[i][1]);
        let numTwo = Number(muls[i][2]);
        sum += numOne * numTwo;
    }
}
console.log(currentDontIndex)

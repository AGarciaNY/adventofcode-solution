import data from "./test.js";

let arrayOfStringNum = data.split("\n").map((num) => Number(num));
let count = 0;
for(let i = 1; i < arrayOfStringNum.length; i++){
    if(arrayOfStringNum[i] > arrayOfStringNum[i - 1]){
        count++;
    };
};
console.log(arrayOfStringNum)
console.log(count)

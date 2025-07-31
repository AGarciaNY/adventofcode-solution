let arrayOfStringNum = data.split("\n").map((num) => Number(num));
let count = 0;
let lastsum = arrayOfStringNum[0] + arrayOfStringNum[1] + arrayOfStringNum[2];

for(let i = 1; i < arrayOfStringNum.length - 2; i++){
    let currentSum = arrayOfStringNum[i] + arrayOfStringNum[i + 1] + arrayOfStringNum[i + 2];
    if(currentSum > lastsum){
        count++;
    };
    lastsum = currentSum;
};
console.log(arrayOfStringNum)
console.log(count)
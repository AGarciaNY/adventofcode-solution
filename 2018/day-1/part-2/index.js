let frequency = 0;

let arrayOfStringNumbers = data.split('\n');
let pastFrequencys = { 0: 1 };
let notFound = true;
while (notFound) {
    for (let i = 0; i < arrayOfStringNumbers.length; i++) {
        let currentString = arrayOfStringNumbers[i];
        if (currentString[0] === '-') {
            frequency -= Number(currentString.slice(1));
        } else {
            frequency += Number(currentString.slice(1));
        };
        if (frequency in pastFrequencys) {
            notFound = false;
            break;
        } else {
            pastFrequencys[frequency] = 1;
        }

    }
}
console.log(frequency, "here");
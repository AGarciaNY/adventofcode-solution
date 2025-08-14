import data from "./data.js";
/*
split the string by \n
organize each string with a object
{
    id
    x
    y
    width
    hieght
}

then make a map using an array

    add the id to map with width and hight
    if id is in spot add count the inch for the id in that spot
    

*/


// let data = `#1 @ 1,3: 4x4
// #2 @ 3,1: 4x4
// #3 @ 5,5: 2x2`;

let splitedData = data.split('\n');
let coordinates = []
let heightest = -Infinity
for (let i = 0; i < splitedData.length; i++) {
    let stringData = {};

    let firstIndex = splitedData[i];
    let id = Number([...firstIndex.match(/#([0-9]+)/g)][0].match(/([0-9]+)/g)[0]);
    let [x, y] = [...firstIndex.match(/([0-9]+),([0-9]+)/g)][0].split(',').map((stringNum) => Number(stringNum));
    let [width, height] = [...firstIndex.match(/([0-9]+)x([0-9]+)/g)][0].split('x').map((stringNum) => Number(stringNum));

    stringData.id = id;
    stringData.x = x;
    stringData.y = y;
    stringData.width = width;
    stringData.height = height;
    if (heightest < height + y) {
        heightest = height + y
    }
    coordinates.push(stringData);
};

let map = Array.from({ length: heightest }, () => new Array(null));;
let countedSpot = new Set();
let count = 0
let listOfNoneOverlap = {}

for (let i = 0; i < coordinates.length; i++) {
    let currentCoordiinate = coordinates[i];
    let startx = currentCoordiinate.x;  // 0 0 0 0 
    let starty = currentCoordiinate.y;  // 0 1 2 3
    let width = currentCoordiinate.width;
    let height = currentCoordiinate.height;

    let spotIsFree = true;
    for (let y = starty; y < (starty + height); y++) {
        for (let x = startx; x < (startx + width); x++) {

            // console.log(typeof map[y][x])
            if (typeof map[y][x] === "number") {
                if (!countedSpot.has(`${y},${x}`)) {
                    map[y][x] = "#"
                    spotIsFree = false
                    if (map[y][x] in listOfNoneOverlap) {
                        delete listOfNoneOverlap[map[y][x]]
                    }
                    continue


                } else {
                    countedSpot.add(`${y},${x}`)
                    count++
                }
            }

            map[y][x] = currentCoordiinate.id;
        }
    }
    if (spotIsFree) {
        listOfNoneOverlap[currentCoordiinate.id] = "free"
    }
};

// console.log(Object.values(listOfNoneOverlap).length)


for (let key in listOfNoneOverlap) {
    let currentCoordiinate = coordinates[key-1]
    let startx = currentCoordiinate.x;  // 0 0 0 0 
    let starty = currentCoordiinate.y;  // 0 1 2 3
    let width = currentCoordiinate.width;
    let height = currentCoordiinate.height;

    let isFree = true;
    for (let y = starty; y < (starty + height); y++) {
        for (let x = startx; x < (startx + width); x++) {
            if (map[y][x] === "#") {
                isFree = false
            }
        }
    }
    if (isFree) {
        console.log(currentCoordiinate.id,"here")
    }
}
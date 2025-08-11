import data from "./data.js";
/*
    split string by "\n" and " "
    set variabel:
        x and z

    determine if going up down forward
        add or subtract to x,z
    
    return x * z
 */

// let data = `forward 5
// down 5
// forward 8
// up 3
// down 8
// forward 2`

let stringArray = data.split("\n");

let directions = stringArray.map((subString) => {
    let direction = subString.split(" ")
    return [direction[0], Number(direction[1])]
})

let x = 0
let z = 0
let aim = 0
for (let i = 0; i < directions.length; i++) {
    let currentDirection = directions[i]
    if (currentDirection[0] === "forward") {
        x += currentDirection[1]
        if (aim > 0) {
            z += currentDirection[1] * aim
        }
    } else if (currentDirection[0] === "down") {
        aim += currentDirection[1]
    } else {
        aim -= currentDirection[1]
    }
}

console.log(x * z)
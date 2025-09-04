import data from "./data.js";
// let data = `....#.....
// .........#
// ..........
// ..#.......
// .......#..
// ..........
// .#..^.....
// ........#.
// #.........
// ......#...`;

let map = data.split('\n');

let startingPosition;

for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
        if (map[i][j] === "^") {
            startingPosition = [i, j];
        };
    };
};

let queue = [startingPosition];
let direction = "up";
let count = 0;
let pastlocations = new Set();

function walk() {
    let [y, x] = queue.shift();
    let nextElement;


    //add to count
    if (!pastlocations.has(`${y},${x}`)) {
        pastlocations.add(`${y},${x}`);
        count++;
    }
    // move to next position
    if (direction === "up") {
        if (y - 1 === -1) return true;
        nextElement = map[y - 1][x];

    } if (direction === "right") {
        if (x + 1 === map[0].length) return true;
        nextElement = map[y][x + 1];

    } if (direction === "down") {
        if (y + 1 === map.length) return true;
        nextElement = map[y + 1][x];

    } if (direction === "left") {
        if (x - 1 === -1) return true;
        nextElement = map[y][x - 1];

    };

    // switch direction
    if (nextElement === "#") {
        if (direction === "up") {
            direction = "right";

        } else if (direction === "right") {
            direction = "down";

        } else if (direction === "down") {
            direction = "left";

        } else if (direction === "left") {
            direction = "up";
        };
    };
    // steps
    if (direction === "up") {
        queue.push([y - 1, x]);

    } if (direction === "right") {
        queue.push([y, x + 1]);

    } if (direction === "down") {
        queue.push([y + 1, x]);

    } if (direction === "left") {
        queue.push([y, x - 1]);
    }
}
while (queue.length > 0) {
    walk();
}
console.log(count, "at end HERERERERE");
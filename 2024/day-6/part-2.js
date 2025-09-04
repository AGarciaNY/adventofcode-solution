// import data from "./data.js";
let data = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

let map = data.split('\n');

let startingPosition;
let pastStart = new Set()
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

// trivers threw map
function walk() {
    let [y, x] = queue.shift();
    let nextElement;

    // move to next position
    if (direction === "up") {
        // add posible next path
        checkForLoop([y, x], [y - 1, x], "right")
        //check if out of bound
        if (y - 1 === -1) return true;
        // get next element
        nextElement = map[y - 1][x];

    } if (direction === "right") {
        // add posible next path
        checkForLoop([y, x], [y, x + 1], "down")
        //check if out of bound
        if (x + 1 === map[0].length) return true;
        // get next element
        nextElement = map[y][x + 1];

    } if (direction === "down") {
        // add posible next path
        checkForLoop([y, x], [y + 1, x], "left")
        //check if out of bound
        if (y + 1 === map.length) return true;
        // get next element
        nextElement = map[y + 1][x];

    } if (direction === "left") {
        // add posible next path
        checkForLoop([y, x], [y, x - 1], "up")
        //check if out of bound
        if (x - 1 === -1) return true;
        // get next element
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

    // add next step
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

// check new path
function checkForLoop(newStartingPosition, newWall, nextDirection) {

    let startKey = `${newStartingPosition[0]},${newStartingPosition[1]}`;
    let newQeue = [newStartingPosition]

    function checkWalk(newSet) {
        let [y, x] = newQeue.shift();
        if (!newSet.has(`${y},${x}`)) {
            newSet.add(`${y},${x}`)
        } else {
            if (pastStart.has(`${y},${x}`)) {
                return "noLoop"
            }
            pastStart.add(`${y},${x}`)
            return "loop"
        }
        let nextElementPo;

        // move to next position
        if (nextDirection === "up") {
            if (y - 1 === -1) return true;
            nextElementPo = [y - 1, x];

        } if (nextDirection === "right") {
            if (x + 1 === map[0].length) return true;
            nextElementPo = [y, x + 1];

        } if (nextDirection === "down") {
            if (y + 1 === map.length) return true;
            nextElementPo = [y + 1, x];

        } if (nextDirection === "left") {
            if (x - 1 === -1) return true;
            nextElementPo = [y, x - 1];

        };
        if (`${nextElementPo[0]},${nextElementPo[1]}` === startKey) {
            if (pastStart.has(`${y},${x}`)) {
                return "noLoop"
            }
            pastStart.add(`${y},${x}`)
            return "loop"
        }
        // switch direction
        if (map[nextElementPo[0]][nextElementPo[1]] === "#" || `${nextElementPo[0]},${nextElementPo[1]}` === `${newWall[0]},${newWall[1]}`) {
            if (nextDirection === "up") {
                nextDirection = "right";

            } else if (nextDirection === "right") {
                nextDirection = "down";

            } else if (nextDirection === "down") {
                nextDirection = "left";

            } else if (nextDirection === "left") {
                nextDirection = "up";
            };
        };

        // steps
        if (nextDirection === "up") {
            newQeue.push([y - 1, x]);

        } if (nextDirection === "right") {
            newQeue.push([y, x + 1]);

        } if (nextDirection === "down") {
            newQeue.push([y + 1, x]);

        } if (nextDirection === "left") {
            newQeue.push([y, x - 1]);
        }
    }

    let newPathSet = new Set()
    
    while (newQeue.length > 0) {
        let result = checkWalk(newPathSet);
        if (result === "loop") {
            count++
            newQeue = []
            break
        } else if (result === "noLoop") {
            newQeue = []
            break
        }
    }

}
console.log(count, startingPosition)
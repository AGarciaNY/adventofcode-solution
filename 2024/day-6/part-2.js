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


function checkForLoop(block) {
  let queue = [startingPosition];
  let direction = "up";
  let visitedStates = new Set();

  function walk2() {
    let [y, x] = queue.shift();

    // state includes direction
    let state = `${y},${x},${direction}`;
    if (visitedStates.has(state)) {
      return "loop"; // we’re stuck in cycle
    }
    visitedStates.add(state);

    let nextY = y;
    let nextX = x;

    if (direction === "up") nextY = y - 1;
    if (direction === "right") nextX = x + 1;
    if (direction === "down") nextY = y + 1;
    if (direction === "left") nextX = x - 1;

    // check bounds
    if (nextY < 0 || nextY >= map.length || nextX < 0 || nextX >= map[0].length) {
      return "exit";
    }

    // treat block + "#" as obstacles
    let isBlock =
      (block && block[0] === nextY && block[1] === nextX) ||
      map[nextY][nextX] === "#";

    if (isBlock) {
      // turn right
      if (direction === "up") direction = "right";
      else if (direction === "right") direction = "down";
      else if (direction === "down") direction = "left";
      else if (direction === "left") direction = "up";

      // stay in place after turning
      queue.push([y, x]);
    } else {
      // move forward
      queue.push([nextY, nextX]);
    }
  }

  while (queue.length > 0) {
    let result = walk2();
    if (result === "loop") return true;
    if (result === "exit") return false;
  }
  return false;
}


// Part 2: try placing blocks on each visited cell
let loopCount = 0;
for (let pos of pastlocations) {
  let [y, x] = pos.split(",").map(Number);

  // skip the starting cell
  if (y === startingPosition[0] && x === startingPosition[1]) continue;

  if (checkForLoop([y, x])) {
    loopCount++;
  }
}


console.log(loopCount, "possible two-block loop placements");
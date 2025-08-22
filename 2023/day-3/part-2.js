import data from "./data.js";
// const data = `
// 467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..
// `;

const grid = data.trim().split("\n").map(line => line.split(""));

const rows = grid.length;
const cols = grid[0].length;
let sum = 0;

function inBounds(r, c) {
  return r >= 0 && r < rows && c >= 0 && c < cols;
}

function getNumbersAt(r, c) {
  const numbers = [];
  let cc = c;
  while (cc < cols && grid[r][cc] >= "0" && grid[r][cc] <= "9") {
    let numStr = "";
    while (cc < cols && grid[r][cc] >= "0" && grid[r][cc] <= "9") {
      numStr += grid[r][cc];
      cc++;
    }
    numbers.push({ value: parseInt(numStr, 10), startCol: c, endCol: cc - 1 });
  }
  return numbers;
}

function touchesNumber(r, c, numObj) {
  const { startCol, endCol, row } = numObj;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const nr = r + dr;
      const nc = c + dc;
      if (nr === row && nc >= startCol && nc <= endCol) return true;
    }
  }
  return false;
}

// Precompute all numbers with positions
const allNumbers = [];
for (let r = 0; r < rows; r++) {
  let c = 0;
  while (c < cols) {
    if (grid[r][c] >= "0" && grid[r][c] <= "9") {
      let start = c;
      let numStr = "";
      while (c < cols && grid[r][c] >= "0" && grid[r][c] <= "9") {
        numStr += grid[r][c];
        c++;
      }
      allNumbers.push({ value: parseInt(numStr, 10), row: r, startCol: start, endCol: c - 1 });
    } else {
      c++;
    }
  }
}

// Scan grid for '*' gears
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    if (grid[r][c] === "*") {
      // Check which numbers touch this '*'
      const touching = [];
      for (let n = 0; n < allNumbers.length; n++) {
        const numObj = allNumbers[n];
        if (touchesNumber(r, c, numObj)) {
          touching.push(numObj.value);
        }
      }
      if (touching.length === 2) {
        sum += touching[0] * touching[1];
      }
    }
  }
}
console.log(sum)
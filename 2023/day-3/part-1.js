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

// Helper: check if inside bounds
function inBounds(r, c) {
  return r >= 0 && r < rows && c >= 0 && c < cols;
}

// Helper: check if digit touches a symbol
function touchesSymbol(r, c) {
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const nr = r + dr, nc = c + dc;
      if (inBounds(nr, nc)) {
        const ch = grid[nr][nc];
        if (!(ch >= "0" && ch <= "9") && ch !== ".") {
          return true;
        }
      }
    }
  }
  return false;
}

// Scan grid row by row
for (let r = 0; r < rows; r++) {
  let c = 0;
  while (c < cols) {
    if (grid[r][c] >= "0" && grid[r][c] <= "9") {
      // Start of a number
      let numStr = "";
      let touches = false;

      while (c < cols && grid[r][c] >= "0" && grid[r][c] <= "9") {
        numStr += grid[r][c];
        if (touchesSymbol(r, c)) {
          touches = true;
        }
        c++;
      }

      if (touches) {
        sum += parseInt(numStr, 10);
      }
    } else {
      c++;
    }
  }
}

console.log(sum);

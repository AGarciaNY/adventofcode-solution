import data from "./data.js";
// let data = `MMMSXxMMAS
// MSAMXMSMSA
// AMXSXMAAMM
// MSAMASMSMX
// XMASAMXAMM
// XXAMMXXAMA
// SMSMSASXSS
// SAXAMASAAA
// MAMMMXMMMM
// MXMXAXMASX`;

let wordMatrix = data.split('\n');

function check(i, j) {
    let count = 0;

    // topleft to bottomright
    let topLeftToBottomRight = wordMatrix[i - 1][j - 1] + wordMatrix[i][j] + wordMatrix[i + 1][j + 1];
    // topright to bottomleft
    let topRightToBottomLeft = wordMatrix[i - 1][j + 1] + wordMatrix[i][j] + wordMatrix[i + 1][j - 1];
    // bottomleft to topright
    let bottomLeftToTopRight = wordMatrix[i + 1][j - 1] + wordMatrix[i][j] + wordMatrix[i - 1][j + 1];
    // bottomright to topleft
    let bottomRightToTopLeft = wordMatrix[i + 1][j + 1] + wordMatrix[i][j] + wordMatrix[i - 1][j - 1];

    let results = [topLeftToBottomRight, topRightToBottomLeft, bottomLeftToTopRight, bottomRightToTopLeft];

    for (let k = 0; k < results.length; k++) {
        if (results[k] === "MAS") count++;
    };

    return count === 2 ? 1 : 0;
};

let finalCount = 0
for (let i = 1; i < wordMatrix.length - 1; i++) {
    for (let j = 1; j < wordMatrix[0].length - 1; j++) {
        finalCount += check(i, j);
    };
};
console.log(finalCount, "here");
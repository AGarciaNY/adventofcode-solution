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


    let topToBottom;
    let leftToRight;
    let bottomToTop;
    let rightToLeft;
    let topLeftToBottomRight;
    let topRightToBottomLeft;
    let bottomLeftToTopRight;
    let bottomRightToTopLeft;
    let count = 0;

    // top to bottom
    if (i + 3 < wordMatrix.length) {
        topToBottom = wordMatrix[i][j] + wordMatrix[i + 1][j] + wordMatrix[i + 2][j] + wordMatrix[i + 3][j];
    }
    // bottom to top
    if (i - 3 >= 0) {
        bottomToTop = wordMatrix[i][j] + wordMatrix[i - 1][j] + wordMatrix[i - 2][j] + wordMatrix[i - 3][j];
    }
    // left to right
    if (j + 3 < wordMatrix[0].length) {
        leftToRight = wordMatrix[i][j] + wordMatrix[i][j + 1] + wordMatrix[i][j + 2] + wordMatrix[i][j + 3];
    }
    // right to left
    if (j - 3 >= 0) {
        rightToLeft = wordMatrix[i][j] + wordMatrix[i][j - 1] + wordMatrix[i][j - 2] + wordMatrix[i][j - 3];
    }

    // topleft to bottomright
    if (i + 3 < wordMatrix.length && j + 3 < wordMatrix[0].length) {
        topLeftToBottomRight = wordMatrix[i][j] + wordMatrix[i + 1][j + 1] + wordMatrix[i + 2][j + 2] + wordMatrix[i + 3][j + 3];
    }
    // topright to bottomleft
    if (i + 3 < wordMatrix.length && j - 3 >= 0) {
        topRightToBottomLeft = wordMatrix[i][j] + wordMatrix[i + 1][j - 1] + wordMatrix[i + 2][j - 2] + wordMatrix[i + 3][j - 3];
    }
    // bottomleft to topright
    if (i - 3 >= 0 && j + 3 < wordMatrix[0].length) {
        bottomLeftToTopRight = wordMatrix[i][j] + wordMatrix[i - 1][j + 1] + wordMatrix[i - 2][j + 2] + wordMatrix[i - 3][j + 3];
    }
    // bottomright to topleft
    if (i - 3 >= 0 && j - 3 >= 0) {
        bottomRightToTopLeft = wordMatrix[i][j] + wordMatrix[i - 1][j - 1] + wordMatrix[i - 2][j - 2] + wordMatrix[i - 3][j - 3];
    }
    // console.log(topToBottom);
    // console.log(leftToRight);
    // console.log(bottomToTop);
    // console.log(rightToLeft);
    // console.log(topLeftToBottomRight);
    // console.log(topRightToBottomLeft);
    // console.log(bottomLeftToTopRight);
    // console.log(bottomRightToTopLeft);

    let results = [topToBottom, leftToRight, bottomToTop, rightToLeft, topLeftToBottomRight, topRightToBottomLeft, bottomLeftToTopRight, bottomRightToTopLeft];
    // console.log(results)
    for (let k = 0; k < results.length; k++) {
        if (results[k] === "XMAS") count++;
    }
    // if(count > 0){console.log(results, i, j, count)}
    return count;
}
// console.log(check(0, 5))

let finalCount = 0
for (let i = 0; i < wordMatrix.length; i++) {
    console.log(wordMatrix[i].length)
    for (let j = 0; j < wordMatrix[0].length; j++) {
        finalCount += check(i, j);
    };
};
console.log(finalCount,"here")
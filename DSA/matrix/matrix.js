// Write a function that takes in a matrix and a row index and returns the matrix with all elements at that rowIndex equal to 0

// function setRowToZero(matrix, rowIndex) {
//   for (let col = 0; col < matrix[rowIndex].length; col++) {
//     matrix[rowIndex][col] = 0;
//   }
//   return matrix;
// }
// const matrix = [
//   [0, 2, 3],
//   [3, 0, 6],
//   [3, 5, 0],
// ];

// console.log("set them to zerooo", setRowToZero(matrix, 0));

// Write a function that takes in a matrix and a col index and returns the matrix with all elements at that colIndex equal to 0

function setColToZero(matrix2, colIndex) {
  for (let row = 0; row < matrix2.length; row++) {
    console.log(matrix2[row][colIndex]);

    matrix2[row][colIndex] = 0;
  }
  return matrix2;
}
const matrix2 = [
  [0, 2, 3],
  [3, 0, 6],
  [3, 5, 0],
];

console.log("set colll them to zerooo", setColToZero(matrix2, 2));

// / initial pass-through to get all coordinates of current 0s
// let rowIndexes = [0, 2]; let colIndexes = [2, 1]
// // call setRowToZero() and setColToZero() on all rows and columns in above coordinates

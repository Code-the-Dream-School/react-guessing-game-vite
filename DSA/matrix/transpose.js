// //huseyin' workspace
// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal,
// switching the matrix's row and column indices.
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  //find dimensions of matrix
  //calc number of rows
  const rows = matrix.length;
  //calc number of cols
  const cols = matrix[0].length;
  //create result matrix swapped dimensions
  const result = [];
  //loop tru cols to swap indices
  for (let j = 0; j < cols; j++) {
    //create a new row for result matrix
    result[j] = [];

    for (let i = 0; i < rows; i++) {
      result[j][i] = matrix[i][j];
      //set matrix[i][j] to result result[j][i]
      console.log("result +>", result[j]);
    }
  }
  console.table(result);
  //return transposed array
};
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
transpose(matrix);
// Example 1:

// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2:

// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

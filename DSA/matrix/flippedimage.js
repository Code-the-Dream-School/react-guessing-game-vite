// // Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// // To flip an image horizontally means that each row of the image is reversed.

// // For example, flipping [1,1,0] horizontally results in [0,1,1].
// // To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// // For example, inverting [0,1,1] results in [1,0,0].

// Example 1:

// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
var flipAndInvertImage = function (image) {
  const n = image.length;
  //flip horizantall use two pointer
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = n - 1;
    while (left < right) {
      const temp = image[i][left];
      image[i][left] = image[i][right];
      image[i][right] = temp;
      left++;
      right--;
    }
    console.log(`after flip:`, image[i]);
  }

  //invert after all
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      image[i][j] = 1 - image[i][j];
    }
  }

  return image;
};

const testImage = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
flipAndInvertImage(testImage);

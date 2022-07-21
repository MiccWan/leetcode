/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const oriColor = image[sr][sc];
  function fill(row, col) {
    if (row >= 0 && row < image.length && col >= 0 && col < image[0].length && image[row][col] === oriColor) {
      image[row][col] = color;
      fill(row, col + 1);
      fill(row, col - 1);
      fill(row + 1, col);
      fill(row - 1, col);
    }
  }

  if (oriColor !== color) {
    fill(sr, sc)
  }
    
  return image;
};

const image = [[1,1,1],[1,1,0],[1,0,1]];
floodFill(image, 1, 1, 2);
console.log(JSON.stringify(image, null, 2));

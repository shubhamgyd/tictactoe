export function isMatrixFull(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] !== null) {
      count += 1;
    }
  }
  if (count == 9) {
    return true;
  } else {
    return false;
  }
}

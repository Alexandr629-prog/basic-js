module.exports = function countCats(matrix) {
  let k = 0;

  matrix.forEach(array => {
    array.forEach(elem => {
      if (elem === '^^') {
        k++;
      }
    });
  });

  return count;
};
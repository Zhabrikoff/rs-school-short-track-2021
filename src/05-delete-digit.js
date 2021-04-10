/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrNumber = String(n).split('').map(Number);
  const min = Math.min(...arrNumber);

  arrNumber.splice(arrNumber.indexOf(min), 1);

  return Number(arrNumber.join(''));
}

module.exports = deleteDigit;

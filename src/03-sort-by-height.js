/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const settingArr = arr.filter((elem) => elem !== -1).sort((a, b) => a - b);

  arr.map((elem) => {
    if (elem !== -1) {
      newArr.push(settingArr[0]);
      settingArr.shift();
    } else {
      newArr.push(-1);
    }
    return elem;
  });

  return newArr;
}

module.exports = sortByHeight;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) {
      return [storage[num], index];
    } else {
      storage[target - num] = index;
      // {9-2=7:0}
      // {6-3=3:0}
      // {6-2=4:1}
    }
  }
};

module.exports = twoSum;

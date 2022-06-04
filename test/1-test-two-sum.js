const { expect } = require('chai');
const twoSum = require('../1-two-sum');

describe('twoSum', () => {
  it('returns array of indexs summing to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).to.deep.eq([0, 1]);
  });
});

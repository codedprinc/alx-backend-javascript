const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle rounding down', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it('should handle rounding up', () => {
    assert.strictEqual(calculateNumber(1.6, 2.6), 5);
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.4), -3);
    assert.strictEqual(calculateNumber(-1.6, -2.6), -5);
  });
});

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
  });

  describe('type DIVIDE', () => {
    it('should return division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('should return Error when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 4, 0.2), 'Error');
    });
  });
});

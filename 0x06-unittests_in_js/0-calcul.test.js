import assert from 'assert';
import calculateNumber from './0-calcul.js';

describe('calculateNumber', () => {
    describe('first number rounding', () => {
        it('should round first number up', () => {
            assert.strictEqual(calculateNumber(1.7, 0), 2);
            assert.strictEqual(calculateNumber(1.5, 0), 2);
        });

        it('should round first number down', () => {
            assert.strictEqual(calculateNumber(1.2, 0), 1);
            assert.strictEqual(calculateNumber(1.4, 0), 1);
        });
    });

    describe('second number rounding', () => {
        it('should round second number up', () => {
            assert.strictEqual(calculateNumber(0, 1.7), 2);
            assert.strictEqual(calculateNumber(0, 1.5), 2);
        });

        it('should round second number down', () => {
            assert.strictEqual(calculateNumber(0, 1.2), 1);
            assert.strictEqual(calculateNumber(0, 1.4), 1);
        });
    });

    describe('both numbers rounding', () => {
        it('should round both numbers up', () => {
            assert.strictEqual(calculateNumber(2.6, 2.5), 6);
            assert.strictEqual(calculateNumber(2.5, 2.5), 6);
        });

        it('should round both numbers down', () => {
            assert.strictEqual(calculateNumber(2.4, 2.4), 4);
            assert.strictEqual(calculateNumber(2.3, 2.3), 4);
        });

        it('should round first up and second down', () => {
            assert.strictEqual(calculateNumber(2.5, 2.4), 5);
        });

        it('should round first down and second up', () => {
            assert.strictEqual(calculateNumber(2.4, 2.5), 5);
        });
    });

    describe('integer inputs', () => {
        it('should return sum of integers', () => {
            assert.strictEqual(calculateNumber(1, 2), 3);
            assert.strictEqual(calculateNumber(1, 1), 2);
        });
    });
});

const assert = require('assert');
const { add, multiply } = require('../utils'); // Adjust the path based on your project structure

describe('Calculator Tests', function() {
  describe('add function', function() {
    it('should add two numbers correctly', function() {
      assert.strictEqual(add(2, 3), 5);
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(add(-2, 3), 1);
    });
  });

  describe('multiply function', function() {
    it('should multiply two numbers correctly', function() {
      assert.strictEqual(multiply(2, 3), 6);
    });

    it('should handle one zero operand', function() {
      assert.strictEqual(multiply(2, 0), 0);
    });

    it('should handle both zero operands', function() {
      assert.strictEqual(multiply(0, 0), 0);
    });
  });
});

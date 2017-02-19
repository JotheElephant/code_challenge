const assert = require('assert');
const challenge = require('./challenge.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      console.log(challenge.test())
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
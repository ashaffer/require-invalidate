/**
 * Imports
 */

var requireInvalidate = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  require('./fixtures/a')
  t.equal(testNum, 2)
  t.equal(testNum2, 2)

  requireInvalidate('./fixtures/a')
  require('./fixtures/a')
  t.equal(testNum, 3)
  t.equal(testNum2, 2)

  requireInvalidate('./fixtures/b')
  require('./fixtures/a')
  t.equal(testNum, 4)
  t.equal(testNum2, 3)

  t.end()
})

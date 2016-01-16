/**
 * Modules
 */

var path = require('path')
var callsites = require('callsites')
var resolveFrom = require('resolve-from')

/**
 * Expose requireInvalidate
 */

module.exports = requireInvalidate

/**
 * requireInvalidate
 */

function requireInvalidate (moduleId, root) {
  var cp = path.dirname(callerPath())

  moduleId = resolveFrom(cp, moduleId)
  root = root ? resolveFrom(cp, root) : undefined

  var p = require.cache[moduleId]
  while (p && p.id !== root) {
    delete require.cache[p.id]
    p = p.parent || undefined
  }
}

/**
 * Get the path of the calling function
 */

function callerPath () {
  return callsites()[2].getFileName()
}

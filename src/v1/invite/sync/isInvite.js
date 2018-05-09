const Validator = require('is-my-json-valid')
const schema = require('../schema/invite')
const validate = Validator(schema, { verbose: true })
const getContent = require('ssb-msg-content')

module.exports = function isInvite (obj) {
  var result = validate(getContent(obj))

  Object.assign(obj, validate)

  return result
}

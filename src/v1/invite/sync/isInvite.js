const Validator = require('is-my-json-valid')
const schema = require('../schema/invite')
const validate = Validator(schema, { verbose: true })
const getContent = require('ssb-msg-content')

module.exports = function isInvite (obj) {
  const result = validate(getContent(obj))

  isInvite.errors = validate.errors

  return result
}

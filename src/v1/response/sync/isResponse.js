const Validator = require('is-my-json-valid')
const schema = require('../schema/response')
const validate = Validator(schema, { verbose: true })
const getContent = require('ssb-msg-content')

module.exports = function isResponse (obj) {
  const result = validate(getContent(obj))

  isResponse.errors = validate.errors

  return result
}

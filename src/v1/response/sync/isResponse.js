const schema = require('../schema/response')
const validate = require('../../lib/validator')

module.exports = validate(schema)

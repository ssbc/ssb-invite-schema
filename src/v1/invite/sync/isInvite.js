const schema = require('../schema/invite')
const validate = require('../../lib/validator')

module.exports = validate(schema)

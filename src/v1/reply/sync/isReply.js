const schema = require('../schema/reply')
const validate = require('../../lib/validator')

module.exports = validate(schema)

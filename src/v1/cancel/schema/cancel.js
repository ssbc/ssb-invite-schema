const definitions = require('../../lib/definitions')
const { SCHEMA_VERSION } = require('../../constants')

module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ['version', 'type', 'root', 'recps'],
  properties: {
    version: {
      type: 'string',
      pattern: `^${SCHEMA_VERSION}$`
    },
    module: { type: 'string' },
    type: {
      type: 'string',
      pattern: '^cancel'
    },
    root: {
      oneOf: [
        { type: 'null' },
        { $ref: '#/definitions/messageId' },
      ]
    },
    body: { type: 'string' },
    mentions: { $ref: '#/definitions/mentions/any' },
    recps: { $ref: '#/definitions/recps' }
  },
  definitions: definitions
}

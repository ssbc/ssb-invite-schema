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
      pattern: '^invite$'
    },
    root: {
      oneOf: [
        { type: 'null' },
        { $ref: '#/definitions/messageId' },
      ]
    },
    expiresAt: {
      type: 'string',
      format: 'date-time'
    },
    body: { type: 'string' },
    mentions: { $ref: '#/definitions/mentions/any' },
    recps: { $ref: '#/definitions/recps' }
  },
  definitions: definitions
}

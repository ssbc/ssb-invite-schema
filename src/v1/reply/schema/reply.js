const definitions = require('../../lib/definitions')
const { SCHEMA_VERSION } = require('../../constants')

module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ['version', 'type', 'root', 'branch', 'recps', 'accept'],
  properties: {
    version: {
      type: 'string',
      pattern: `^${SCHEMA_VERSION}$`
    },
    module: { type: 'string' },
    type: {
      type: 'string',
      pattern: '^invite-reply$'
    },
    root: {
      oneOf: [
        { $ref: '#/definitions/messageId' }
      ]
    },
    branch: {
      oneOf: [
        { $ref: '#/definitions/messageId' },
        {
          type: 'array',
          items: {
            oneOf: [
              { $ref: '#/definitions/messageId' }
            ]
          }
        }
      ]
    },
    accept: { type: 'boolean' },
    body: { type: 'string' },
    mentions: { $ref: '#/definitions/mentions/any' },
    recps: { $ref: '#/definitions/recps' },
  },
  definitions: definitions
}

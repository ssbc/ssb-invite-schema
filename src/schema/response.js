const definitions = require('../v1/lib/definitions')

module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ['version', 'type', 'root', 'branch', 'recps', 'accept'],
  properties: {
    version: { type: 'string' },
    module: { type: 'string' },
    type: {
      type: 'string',
      pattern: '^response$'
    },
    root: {
      oneOf: [
        { $ref: '#/definitions/messageId' }
      ]
    },
    branch: {
      oneOf: [
        { $ref: '#/definitions/messageId' },
      ]
    },
    accept: { type: 'boolean' },
    body: { type: 'string' },
    mentions: { $ref: '#/definitions/mentions/any' },
    recps: { $ref: '#/definitions/recps' },
  },
  definitions: definitions
}


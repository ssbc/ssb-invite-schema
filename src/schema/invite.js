const definitions = require('../v1/lib/definitions')

module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ['version', 'type', 'root', 'body', 'recps'],
  properties: {
    version: { type: 'string' },
    type: {
      type: 'string',
      pattern: '^invite$'
    },
    root: { $ref: '#/definition/messageId' },
    expiresAt: { type: 'string', format: 'date-time' },
    body: { type: 'string' },
    recps: { $ref: '#/definitions/recps' },
    mentions: { $ref: '#/definitions/mentions/feed' }
  },
  definitions: definitions
}

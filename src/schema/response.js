const ssbSchemaDefintions = require('../v1/lib/ssbSchemaDefintions')

module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ['version', 'type', 'root', 'branch', 'body', 'recps'],
  properties: {
    version: { type: 'string' },
    type: { 
      type: 'string',
      pattern: '^response$'
    },
    root: { $ref: '#/definition/messageId' },
    branch: { $ref: '#/definitions/messageId' },
    accept: { type: 'boolean' },
    recps: { $ref: '#/definitions/recps' }
  },
  definitions: definitions
}

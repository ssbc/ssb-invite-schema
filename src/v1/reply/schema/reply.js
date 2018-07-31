const definitions = require('ssb-schema-definitions')
const { SCHEMA_VERSION } = require('../../version')

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
    root: { $ref: '#/definitions/root' },
    branch: { $ref: '#/definitions/branch' },
    accept: { type: 'boolean' },
    body: { type: 'string' },
    mentions: { $ref: '#/definitions/mentions/any' },
    recps: { $ref: '#/definitions/recps' },
  },
  definitions: definitions
}

const nest = require('depnest')

const isInvite = require('./invite/sync/isInvite')
const isResponse = require('./response/sync/isResponse')
const parseInvite = require('./invite/sync/parseInvite')
const parseResponse = require('./response/sync/parseResponse')

const { SCHEMA_VERSION } = require('./constants')

module.exports = {
  gives: nest({
    'invite': [
      'isInvite',
      'parseInvite'
    ],
    'response': [
      'isResponse',
      'parseResponse'
    ],
    'version': [
      'string'
    ]
  }),
  create: function (api) {
    return nest({
      invite: {
        isInvite: isInvite,
        parseInvite: parseInvite
      },
      response: {
        isResponse: isResponse,
        parseResponse: parseResponse
      },
      version: {
        string: versionString
      }
    })

    function versionString (versions) {
      versions.V1_SCHEMA_VERSION_STRING = SCHEMA_VERSION
      return versions
    }
  }
}

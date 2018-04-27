const nest = require('depnest')

const isV1Invite = require('./invite/sync/isInvite')
const isV1Response = require('./response/sync/isResponse')
const { SCHEMA_VERSION } = require('./constants')

module.exports = {
  gives: nest({
    'invite': [
      'isInvite'
    ],
    'response': [
      'isResponse'
    ],
    'version': [
      'string'
    ]
  }),
  create: function (api) {
    return nest({
      invite: {
        isInvite: isInvite
      },
      response: {
        isResponse: isResponse
      },
      version: {
        string: versionString
      }
    })

    function isInvite (obj) {
      return isV1Invite(obj) ? true : undefined
    }

    function isResponse (obj) {
      return isV1Response(obj) ? true : undefined
    }

    function versionString (versions) {
      versions.V1_SCHEMA_VERSION_STRING = SCHEMA_VERSION
      return versions
    }
  }
}

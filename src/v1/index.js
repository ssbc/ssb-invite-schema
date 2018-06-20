const nest = require('depnest')

const isInvite = require('./invite/sync/isInvite')
const isReply = require('./reply/sync/isReply')
const parseInvite = require('./invite/sync/parseInvite')
const parseReply = require('./reply/sync/parseReply')

const { SCHEMA_VERSION } = require('./constants')

module.exports = {
  gives: nest({
    'invite': [
      'isInvite',
      'parseInvite'
    ],
    'reply': [
      'isReply',
      'parseReply'
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
      reply: {
        isReply: isReply,
        parseReply: parseReply
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

const combine = require('depject')
const { first, reduce } = require('depject/apply')

var v1 = require('./src/v1/')

var sockets = combine([
  v1
])

var isInvite = first(sockets.invite.isInvite, 'invite.isInvite')
var parseInvite = first(sockets.invite.parseInvite, 'invite.parseInvite')

var isReply = first(sockets.reply.isReply, 'reply.isReply')
var parseReply = first(sockets.reply.parseReply, 'reply.parseReply')

var versionStrings = first(sockets.version.string, 'version.string')({})

module.exports = {
  isInvite,
  parseInvite,
  isReply,
  parseReply,
  versionStrings,
  sockets,
  schema: [
    v1
  ]
}

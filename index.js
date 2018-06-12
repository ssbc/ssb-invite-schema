const combine = require('depject')
const { first, reduce } = require('depject/apply')

var v1 = require('./src/v1/')

var sockets = combine([
  v1
])

var isInvite = first(sockets.invite.isInvite, 'invite.isInvite')
var parseInvite = first(sockets.invite.parseInvite, 'invite.parseInvite')

var isResponse = first(sockets.response.isResponse, 'response.isResponse')
var parseResponse = first(sockets.response.parseResponse, 'response.parseResponse')

var versionStrings = first(sockets.version.string, 'version.string')({})

module.exports = {
  isInvite,
  parseInvite,
  isResponse,
  parseResponse,
  versionStrings,
  sockets,
  schema: [
    v1
  ]
}

const getContent = require('ssb-msg-content')
const Parser = require('../../lib/parser')
const isInvite = require('./isInvite')

module.exports = Parser(isInvite)

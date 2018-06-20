const getContent = require('ssb-msg-content')
const Parser = require('../../lib/parser')
const isReply = require('./isReply')

module.exports = Parser(isReply)

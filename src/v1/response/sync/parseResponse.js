const getContent = require('ssb-msg-content')
const Parser = require('../../lib/parser')
const isResponse = require('./isResponse')

module.exports = Parser(isResponse)

const getContent = require('ssb-msg-content')

module.exports = function Parser (validator) {
  return function (msg) {
    if (!validator(msg)) return
    const { key, timestamp } = msg
    const { author } = msg.value
    const content = getContent(msg)
    return Object.assign({}, { key, author, timestamp }, content)
  }
}

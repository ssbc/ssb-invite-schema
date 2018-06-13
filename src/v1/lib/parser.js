const getContent = require('ssb-msg-content')
const { isFeedId } = require('ssb-ref')

module.exports = function Parser (validator) {
  return function (msg) {
    const content = getContent(msg)
    if (!validator(content)) return

    const { key, timestamp } = msg
    const { author } = msg.value

    var recipient = content.recps.filter(recp => recp !== author)[0]
    if (!recipient) return
    recipient = typeof recipient === 'string' ? recipient : recipient.link
    if (!isFeedId(recipient)) return
    delete content.recps

    return Object.assign({}, {
      id: key,
      author,
      recipient,
      timestamp
    }, content)
  }
}

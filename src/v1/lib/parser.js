const getContent = require('ssb-msg-content')
const { isFeedId } = require('ssb-ref')

module.exports = function Parser (validator) {
  return function (msg) {
    const content = getContent(msg)
    if (!validator(content)) return

    const { key, timestamp } = msg
    const { author } = msg.value

    var recipient = content.recps.filter(recp => {
      recipient = typeof recp === 'string' ? recp : recp.link
      return recipient !== author
    })[0]

    if (!recipient && !isFeedId(recipient)) return null
    delete content.recps

    return Object.assign({}, {
      id: key,
      author,
      recipient,
      timestamp
    }, content)
  }
}

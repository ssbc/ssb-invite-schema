const Test = require('tape')

const { isInvite, parseInvite } = require('../../')

Test('invite is valid', (assert) => {
  assert.plan(2)

  var invite = {
    module: 'secrets',
    version: 'v1',
    type: 'invite',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
    expiresAt: new Date().toISOString(),
    body: '[](@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519) invites you to share a secret',
    mentions: [
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ],
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  var msg = {
    key: "%...",
    value: {
      author: "@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519",
      content: invite
    },
    timestamp: 123456789
  }

  assert.ok(isInvite(invite))

  var dupInvite = Object.assign({}, invite)
  delete dupInvite.recps

  var parsed = Object.assign({}, dupInvite, {
    id: msg.key,
    author: msg.value.author,
    timestamp: msg.timestamp,
    recipient: '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
  })

  assert.deepEqual(parsed, parseInvite(msg))
})

Test('missing root: invite is not valid', (assert) => {
  assert.plan(3)

  var invite = {
    type: 'invite',
    version: 'v1',
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  assert.notOk(isInvite(invite))

  errors = invite.errors.map(e => e.field)

  assert.equal(errors.length, 1)
  assert.deepEqual(errors, ['data.root'])
})

Test('missing recps: invite is not valid', (assert) => {
  assert.plan(3)

  var invite = {
    type: 'invite',
    version: 'v1',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
  }

  assert.notOk(isInvite(invite))

  errors = invite.errors.map(e => e.field)

  assert.equal(errors.length, 1)
  assert.deepEqual(errors, ['data.recps'])
})

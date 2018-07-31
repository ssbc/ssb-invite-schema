const Test = require('tape')

const { isReply } = require('../../')

Test('reply is valid', (assert) => {
  assert.plan(1)

  var reply = {
    version: '1',
    module: 'secrets',
    type: 'invite-reply',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
    branch: '%Lihvp+fMdt5CihjbOY6eZc0qCe0eKsrN2wfgXV2E3PM=.sha256',
    accept: true,
    body: '[](@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519) has accepted your invitation',
    mentions: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
    ],
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  assert.ok(isReply(reply))
})

Test('missing root: reply is not valid', (assert) => {
  assert.plan(3)

  var reply = {
    type: 'invite-reply',
    version: '1',
    branch: '%Lihvp+fMdt5CihjbOY6eZc0qCe0eKsrN2wfgXV2E3PM=.sha25',
    accept: false,
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  assert.notOk(isReply(reply))

  errors = reply.errors.map(e => e.field)

  assert.equal(errors.length, 1)
  assert.deepEqual(errors, ['data.root'])
})

Test('missing branch: reply is not valid', (assert) => {
  assert.plan(3)

  var reply = {
    type: 'invite-reply',
    version: '1',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
    accept: true,
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  assert.notOk(isReply(reply))

  errors = reply.errors.map(e => e.field)

  assert.equal(errors.length, 1)
  assert.deepEqual(errors, ['data.branch'])
})

Test('missing recps: reply is not valid', (assert) => {
  assert.plan(3)

  var reply = {
    type: 'invite-reply',
    version: '1',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
    branch: '%Lihvp+fMdt5CihjbOY6eZc0qCe0eKsrN2wfgXV2E3PM=.sha25',
    accept: false
  }

  assert.notOk(isReply(reply))

  errors = reply.errors.map(e => e.field)

  assert.equal(errors.length, 1)
  assert.deepEqual(errors, ['data.recps'])
})

Test('missing accept: reply is not valid', (assert) => {
  assert.plan(3)

  var reply = {
    type: 'invite-reply',
    version: '1',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
    branch: '%Lihvp+fMdt5CihjbOY6eZc0qCe0eKsrN2wfgXV2E3PM=.sha25',
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  assert.notOk(isReply(reply))

  errors = reply.errors.map(e => e.field)

  assert.equal(errors.length, 1)
  assert.deepEqual(errors, ['data.accept'])
})

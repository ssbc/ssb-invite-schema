const Test = require('tape')
const Validator = require('is-my-json-valid')

const inviteSchema = require('../../src/schema/invite')
const validate = Validator(inviteSchema)

Test('invite should be valid', (t) => {
  var invite = {

  }

  t.equal(validate(invite), true)
  t.end()
})

Test('invite should not be valid', (t) => {
  var invite = {

  }

  t.equal(validate(invite), false)
  t.end()
})

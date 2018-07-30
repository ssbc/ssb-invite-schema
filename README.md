# ssb-invite-schema

Validations for type `invite` and `reply` for ssb messages.

```js
const { isInvite, isReply } = require('ssb-invite-schema')

// Get something from your database
server.get(key, (err, msg) => {
  const { content } = msg.value

  // Check if its an invite according to JSON schema
  if(isInvite(content)) {
    // ...
  }

  // Check if its an invite reply according to JSON schema
  if (isReply(content)) {
    // ...
  }
})
```

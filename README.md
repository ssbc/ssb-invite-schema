# ssb-invites-schema

Validations for type `invite` and `response` for ssb messages.

```js
const { isInvite, isResponse } = require('ssb-invites-schema')

// Get something from your database
server.get(key, (err, msg) => {
  const { content } = msg.value

  // Check if its an invite according to JSON schema
  if(isInvite(content)) {
    // ...
  }

  // Check if its an invite response according to JSON schema
  if (isResponse(content)) {
    // ...
  }
})
```

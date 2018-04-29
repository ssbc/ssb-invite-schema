## Thoughts?
* Do we validate a response's `branch` is a valid invite in the schema? This will require `pull-stream`
* Do we validate a invite (and response)'s `root` is an existing record? This will require `pull-stream`

Should this happen in the next layer up? 

The schema validates if an invite/response passed matches the model schema/s, but does not validate against existing data.

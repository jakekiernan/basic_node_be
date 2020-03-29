basic_node_be

set up:

run: `cd /data/db && sudo mongod`
in another window, at project root run `node server.js`

hit api with:

`curl -d '{"name":"Jake"}' -H "Content-Type: application/json" -X POST localhost:6789/addUser` will return the id of the created user.

`curl -H "Content-Type: application/json" -X GET localhost:6789/getUser/5da394325847a719a6611109 // where this is the id of an object in the users collection`

`curl -H "Content-Type: application/json" -X GET localhost:6789/getAllUsers`

mongo shell:
run: `mongo --shell` and `use basic_node_be`
to see all users: `db.users.find()`

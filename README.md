at root run `nodemon server.js`
in another window `cd /data/db && sudo mongod`

curl -d '{"name":"Jake"}' -H "Content-Type: application/json" -X POST localhost:6789/addUser

curl -H "Content-Type: application/json" -X GET localhost:6789/getUser/5da394325847a719a6611109 // where this is the id of an object in the users collection

curl -H "Content-Type: application/json" -X GET localhost:6789/getAllUsers

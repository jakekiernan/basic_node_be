const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)

app.get('*', (req, res)=>{
  res.send('Hit base route.\n')
})

app.listen(6789,()=>console.log("Listening on port 6789"));

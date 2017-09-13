const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      session = require('express-session'),
      massive = require('massive'),
      ctrl = require('./ctrl.js'),
      app = express();
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(session({
  secret: 'laksdlkf',
  saveUninitialized: false,
  resave: false
}))

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  db.seed_file().then(res => console.log(res))
    .catch(err => console.log(err))
})

app.get('/api/getAll1', ctrl.getAll1);
app.get('/api/getAll2', ctrl.getAll2);
app.post('/api/addStuff', ctrl.addStuff);


app.listen(port, () => console.log('Listening on port ' + port));
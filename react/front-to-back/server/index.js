const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      ctrl = require('./controller.js');

require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

massive( process.env.CONNECTION_STRING ).then(db => {
  app.set('db', db);
  db.init.create_all()
  .then(res => console.log('seed successful'))
  .catch(err => console.log(err, 'seed failure'));
}).catch(err => console.log(err, 'database failure'))

app.get('/api/getAll', ctrl.getAll);
app.get('/api/getUser/:id', ctrl.getUser);
app.post('/api/addUser', ctrl.addUser);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`))
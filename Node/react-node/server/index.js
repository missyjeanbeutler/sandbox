const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      port = 3000;

app.use(bodyParser.json());

app.get('/api/first', (req, res, next) => {
  console.log('first!')
  res.status(200).json('this is a string') // .send with a string will send html, it will not be converted to json
})

app.use((req, res, next) => {
  console.log('the middle middleware!') // the above endpoint will not be affected by this middleware because order matters!
})

app.get('/api/second', (req, res, next) => {
  console.log('second!')
})

app.listen(port, () => console.log(`listening on port ${port}`));

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      port = 3000;

app.use(bodyParser.json());

app.get('/api/first', (req, res, next) => {
  console.log('first!')
  res.status(200).json(req.query) // .send with a string will send html, it will not be converted to json
})

app.use((req, res, next) => {
  console.log('the middle middleware!') // the above endpoint will not be affected by this middleware because order matters!
  next()
})

app.get('/api/second', (req, res, next) => {
  console.log('second!')
  res.status(200).end()
})

app.get('/api/change/:id', (req, res) => {

  if(+req.params.id === 1) res.redirect('http://google.com')
  else res.redirect('http://localhost:3001/itWorked')
})

app.listen(port, () => console.log(`listening on port ${port}`));

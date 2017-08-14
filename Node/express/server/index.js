const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      config = require('./config.js'),
      controller = require('./controller.js')

function setExpressApp() {
  console.log('setting express app')
  return express()
}
const app = setExpressApp(),
      port = 3000

//-----------MIDDLEWARE-----------//

app.use(bodyParser.json())
app.use(session({
  secret: config.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))


//-----------END POINTS-----------//


app.get('/api/one', controller.getOne)
app.get('/api/all', controller.getAll)



app.listen(port, () => console.log(`listening on port ${port}`))
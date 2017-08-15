const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
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
  secret: ';lasdfkjlsdf',
  resave: true,
  saveUninitialized: true
}))


//-----------END POINTS-----------//


app.get('/getOne', controller.getOne)
app.get('/getAll', controller.getAll)



app.listen(port, () => console.log(`listening on port ${port}`))
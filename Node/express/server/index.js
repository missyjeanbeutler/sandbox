const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      controller = require('./controller.js')

const app = express(),
      port = 3000

//-----------MIDDLEWARE-----------//

app.use(session({
  secret: 'thisislakwjbvlksdf',
  saveUninitialized: false,
  resave: false
}))


//-----------END POINTS-----------//


app.get('/getOne', (req, res) => {
    console.log(req) 
    res.send('you got all!')
  })
app.get('/getAll', controller.getAll)



app.listen(port, () => console.log(`listening on port ${port}`))
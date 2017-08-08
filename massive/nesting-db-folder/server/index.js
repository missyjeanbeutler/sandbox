const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      config = require('./config.js'),
      controller = require('./controller.js')

const app = express(),
      port = 3000

//-----------MIDDLEWARE-----------//

app.use(bodyParser.json())
app.use(session({
  secret: config.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))
massive({
  host: 'localhost',
  port: 5432,
  database: 'massive_demo',
  user: 'postgres',
  password: ''
}).then((db) => {
  app.set('db', db)
  db.init.test_table().then(res => { 

    // *********** massive with look for /db at the root of your project. You don't have to have your db folder at the root of your app outside of your server folder, you can nest your db folder inside of your server folder. The key is to make sure that the db folder is at the root of whatever folder you run nodemon. If you are in your app root and run nodemon server/index.js it will not work. But if you cd into server and run nodemon, it will work just fine.

    console.log('tables initialized!')
  })
})

//-----------END POINTS-----------//


app.get('/api/products', controller.getAll)
app.get('/api/product/:id', controller.getOne)





app.listen(port, () => console.log(`listening on port ${port}`))
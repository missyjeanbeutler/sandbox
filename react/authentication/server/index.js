const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      cors = require('cors');
      require('dotenv').config();

const app = express();
app.use(express.static('build'));

app.use(bodyParser.json());
app.use(cors())
app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: 'alsdkjflkjsdfjksdf'
}))
app.use(passport.initialize());
app.use(passport.session());


passport.use(new Auth0Strategy({
   domain:       process.env.DOMAIN,
   clientID:     process.env.CLIENT_ID,
   clientSecret: process.env.CLIENT_SECRET,
   callbackURL:  '/auth/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
        return done(null, profile);
    })
);

passport.serializeUser(function(user, done) {
  done(null, user); 
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.get('/auth', passport.authenticate('auth0'));


app.get('/auth/callback',
  passport.authenticate('auth0', {successRedirect: 'http://localhost:3000/'}))

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  res.status(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('http://localhost:3000/');
})

app.get('/getting', function(req, res) {
  res.send('it worked!')
})

app.post('/posting', function(req, res) {
  req.user.submitted = req.body.data
  res.send(req.user.submitted)
})

app.listen(3000, function() {
  console.log('Connected on 3000')
})

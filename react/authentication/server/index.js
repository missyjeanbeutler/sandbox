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
    // step three -- this function fires when authentication was successful.
        return done(null, profile);
    })
);

passport.serializeUser(function(user, done) { // step four -- this happens only once when authentication has been completed. It puts the user on the session object.
  done(null, user); 
});

passport.deserializeUser(function(user, done) { // step five -- this happens everytime an endpoint is hit, it takes the user off the session object and puts it on req.user.
  done(null, user);
});

app.get('/auth', passport.authenticate('auth0')); // step one -- the authenticate method uses the Auth0Strategy in the passport.use method and kicks it off to Auth0 for authentication

app.get('/auth/callback',
  passport.authenticate('auth0', {successRedirect: 'http://localhost:3000/'})) // step two -- it's returned from Auth0 and will once again run the authenticate method, since the user has been authenticated, it will skip the strategy being kicked off to Auth0 and will go to the callback function in the passport.use method

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

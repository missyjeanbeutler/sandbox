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

app.use(session({ // If a session store is not provided, it will use MemoryStore by default. this is not a viable option for production use as it is prone to memory leaks. It's good for developing and debugging only.
  resave: true, 
  saveUninitialized: true, 
  secret: 'alsdkjflkjsdfjksdf'
}))

app.use(passport.initialize()); // actual step one -- initializes passport, loads data from an exisiting session if one exists
app.use(passport.session()); // actual step two -- is responsible for "authenticating" the session, by restoring the user information that was serialized during a previous login. What exactly that means, I do not know :) This MUST be after session() (above). It also calls the deserialize user method I think.

passport.use(new Auth0Strategy({
   domain:       process.env.DOMAIN,
   clientID:     process.env.CLIENT_ID,
   clientSecret: process.env.CLIENT_SECRET,
   callbackURL:  '/auth/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // step three -- this function fires when authentication was successful.
    // Better practice would be to just pass on the user id and only store that in the session store to keep from using more unnecessary memory space. In the deserialize user method, you can make a database call to get that information that you may want for the user.
        return done(null, profile);
    })
);

passport.serializeUser(function(user, done) { // step four -- this happens only once when authentication has been completed. It puts the user on the session and you can find it here - req.session.passport.user.
  done(null, user); 
});


passport.deserializeUser(function(user, done) { // this happens everytime an endpoint is hit,it takes the req.user and allows you to add more stuff to it. 
  // This is where you would make a DB call to get further information that would be added to req.user.
  // Whatever you pass on in the done invocation will become req.user
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

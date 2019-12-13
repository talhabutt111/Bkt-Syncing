var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

// facebook login 
var CLIIENT_APP_ID='453877871871560',
CLIENT_APP_SECRET='53d6ced043e87bb07f5effb40209e8a8';
var fboptns={
   clientID: CLIIENT_APP_ID,
   clientSecret:CLIENT_APP_SECRET ,
   callbackURL: "/callback"
 };
var fbcallBack= function(accessToken, refreshToken, profile, cb) {
   console.log(accessToken, refreshToken, profile);
    };
module.exports= passport.use(new FacebookStrategy(fboptns,fbcallBack));

// server.get('/auth/facebook',
//  passport.authenticate('facebook'));

// server.get('/auth/facebook/callback',
//  passport.authenticate('facebook', { failureRedirect: '/' }),
//  function(req, res) {
//    // Successful authentication, redirect home.
//    res.redirect('/home');
//  });
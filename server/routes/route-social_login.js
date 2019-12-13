// var passport = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;
// var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
// const key=require('../configs/keys')


// module.exports = (server) => {

// //facebook login 
// // var CLIIENT_APP_ID=key.google.id,
// // CLIENT_APP_SECRET=key.google.secret;
// // var fboptns={
// //    clientID: CLIIENT_APP_ID,
// //    clientSecret:CLIENT_APP_SECRET ,
// //    callbackURL: "http://localhost:8000/auth/facebook/callback"
// //  };
// // var fbcallBack= function(accessToken, refreshToken, profile, cb) {
// //    console.log(accessToken, refreshToken, profile);
// //     };
// //  passport.use(new FacebookStrategy(fboptns,fbcallBack));

// // server.get('/auth/facebook',
// //  passport.authenticate('facebook'));

// // server.get('/auth/facebook/callback',
// //  passport.authenticate('facebook', { failureRedirect: '/' }),
// //  function(req, res) {
// //    // Successful authentication, redirect home.
// //    res.redirect('/home');
// //  });

// //google login
// passport.use(new GoogleStrategy({
//   callbackURL: "/auth/google/callback",
//    consumerKey: '363014251359-use9q38p2p3a19k958mmk1uigi6lf820.apps.googleusercontent.com',
//    consumerSecret: 'fOQDlzOkJVl014YaceFDv9T6'
  
//  },
//  function(token, tokenSecret, profile, done) {
//    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
//    //     return done(err, user);
//    //   });
//    console.log(token, tokenSecret, profile);
   
//  }
// ));

// server.get('/auth/google',
//  passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' })
// );

// // GET /auth/google/callback
// //   Use passport.authenticate() as route middleware to authenticate the
// //   request.  If authentication fails, the user will be redirected back to the
// //   login page.  Otherwise, the primary route function function will be called,
// //   which, in this example, will redirect the user to the home page.

// server.get('/auth/google/callback', 
//  passport.authenticate('google', { failureRedirect: '/login' }),
//  function(req, res) {
//    res.redirect('/home');
//  });

 

// }
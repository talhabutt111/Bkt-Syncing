var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = passport.use(new GoogleStrategy({
    
    
    clientID: '363014251359-use9q38p2p3a19k958mmk1uigi6lf820.apps.googleusercontent.com',
    clientSecret: 'DgIiu1go9q27crFsq1XKH2H9',
     callbackURL: "/callback",
    
   },
   () =>{
       console.log('callback for google');
       
   }
//    function(token, tokenSecret, profile, done) {
//      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
//      //     return done(err, user);
//      //   });
//      console.log(token, tokenSecret, profile);
     
//    }
  ));
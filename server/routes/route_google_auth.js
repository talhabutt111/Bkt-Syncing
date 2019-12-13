var passport = require('passport');



module.exports = function (server) {

server.get('/google', passport.authenticate('google',{
    scope:['profile']
}))

server.get('/callback', (req,res) =>{
res.json({
    'message' :'user loggedin',
    loggedin:true
})
});



}

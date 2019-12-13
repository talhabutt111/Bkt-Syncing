var passport = require('passport');



module.exports = function (server) {

server.get('/facebook', passport.authenticate('facebook',{
    scope:['profile']
}))

server.get('/callback', (req,res) =>{
res.json({
    'message' :'user loggedin',
    loggedin:true
})
});



}

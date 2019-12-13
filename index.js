#!/usr/bin/env node
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var passportsetup=require('./server/configs/google_auth');
var passportsetupFacebook=require('./server/configs/facebook_auth');

process.env.NODE_ENV = 'production';

const allowUrl = ['/isAuth', '/auth', '/login','/callback','/facebook','/auth/google','/auth/google/callback','/posts','/users','/pages','/createposts','/comments','/categories','/google'];
// const allowUrl = ['/isAuth', '/auth', '/login','/home','/auth/facebook','/allbkt','/auth/facebook/callback','/auth/google','/auth/google/callback'];


const authenticationMiddleware = (whiteList = []) => (req, res, next) => {
    if (whiteList.includes(req.path)) {
        return next();
    }
    if (req.isAuthenticated()) {
        return next()
    }
    res.json({ message: 'You are not authorized to view this page.' })
}



var server = express();
server.use(express.static('./build'))
server.use(bodyparser.urlencoded({ extended: true }))
server.use(bodyparser.json())
require('./server/configs/passport-config')(server);
server.use(authenticationMiddleware(allowUrl));
require('./server/configs/db-config-mysql');
require('./server/routes/route-login')(server);
require('./server/routes/route-brands')(server);
// require('./server/routes/route-bktsync')(server);
require('./server/routes/route-bktWPsync')(server);
require('./server/routes/route-companies')(server);
require('./server/routes/route_google_auth')(server);
require('./server/routes/route_facebook')(server);
require('./server/routes/route-inventoryHistories')(server);
require('./server/routes/route-inventories')(server);
require('./server/routes/route-invoices')(server);
require('./server/routes/route-invoiceDetails')(server);
require('./server/routes/route-orderDetails')(server);
require('./server/routes/route-orders')(server);
require('./server/routes/route-permissions')(server);
require('./server/routes/route-productCategories')(server);
require('./server/routes/route-products')(server);
require('./server/routes/route-roles')(server);
require('./server/routes/route-rolePermissioning')(server);
require('./server/routes/route-users')(server);
require('./server/routes/route-miscRoutes')(server, express);
// require('./server/routes/route-social_login')(server);
// require('./server/routes/route-allGet')(server);
server.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'))
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send(err.message)
})

// server.listen(process.env.PORT || 8000, () => console.log("server is running"))
server.listen(process.env.PORT || 8000, () => console.log("server is running"))

var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var Users = require('../models/model-users')
var sequelize = require('./db-config-mysql')
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var myStore = new SequelizeStore({
    db: sequelize
})

module.exports = function (server) {
    server.use(session({
        secret: 'bkt_ERP',
        store: myStore,
        resave: false,
        proxy: true,
        saveUninitialized: true,
        name: 'sessionId'

    }))
    myStore.sync();//creating table to store sessions
    server.use(passport.initialize());
    server.use(passport.session());

    passport.use(new localStrategy(
        function (username, password, next) {
            Users.findOne({ where: { username: username } })
                .then((user) => {
                    if (!user) {
                        next(null, false, { message: `username doesn't exist` })
                    }
                    else if (user.password !== password) {
                        next(null, false, { message: 'incorrect password' })
                    }
                    else {
                        next(null, user)
                    }
                })
                .catch(err => next(err));
        }

    ));

    passport.serializeUser(function (user, next) {
        // console.log('serializing')
        // console.log(user)
        next(null, user.id);
    })
    passport.deserializeUser(function (id, next) {
        // console.log(id)
        Users.findByPk(id)
            .then((user) => {
                // console.log('deserializing');
                // console.log(user);

                return next(null, user)
            });
    })
}

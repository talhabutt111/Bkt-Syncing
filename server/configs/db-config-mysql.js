const Sequelize = require('sequelize');


// var dbName = 'sales&stock';
var dbName = 'bucket_erp';
// var user = 'asas';
var user = 'root';

var password = '';
// var password = 'asas1234';
var config = {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    omitNull: true,
    pool: {
        max: 100,
        min: 0,
        acquire: 1000000,
        idle: 200000
    }
}
const sequelize = new Sequelize(dbName, user, password, config)

// to connect to online database hosting

// var config = {
//     // host: 'localhost',
//     dialect: 'mysql',
//     logging: false,
//     omitNull: true,
//     pool: {
//         max: 100,
//         min: 0,
//         acquire: 1000000,
//         idle: 200000
//     }
// }
// var sequelize = new Sequelize('mysql://asas:asas1234@51.75.74.185:3306/sales&stock',[config]);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize


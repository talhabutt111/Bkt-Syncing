const Sequelize = require('sequelize');
var sequelize = require('../configs/db-config-mysql')

const companySchema = {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    cell: Sequelize.STRING,
    address: Sequelize.STRING,
    logo: Sequelize.STRING,
}
const configs = { paranoid: true, underscored: true, }
const Companies = sequelize.define('companies', companySchema, configs);

Companies.sync(
    // { force: true }
)
    .then(() => {
        //  console.log('companies is ready') 
    })
    .catch((err) => {
        console.log(err)
    })
    ;

module.exports = Companies
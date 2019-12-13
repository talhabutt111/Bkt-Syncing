const Sequelize = require('sequelize');
var sequelize = require('../configs/db-config-mysql')

const brandSchema = {
    name: Sequelize.STRING,
    description: Sequelize.STRING
}
const configs = { paranoid: true, underscored: true, }
const Brands = sequelize.define('brands', brandSchema, configs);

Brands.sync(
    // { force: true }
)
    .then(() => {
        //  console.log('Brands is ready') 
    })
    .catch((err) => {
        console.log(err)
    })
    ;

module.exports = Brands
const Sequelize = require('sequelize');
var sequelize = require('../configs/db-config-mysql')

const productCategorySchema = {
    name: Sequelize.STRING,
    description: Sequelize.STRING
}
const configs = { paranoid: true, underscored: true, }
const ProductCategories = sequelize.define('product_categories', productCategorySchema, configs);

ProductCategories.sync(
    // { force: true }
)
    .then(() => {
        //  console.log('ProductCategories is ready') 
    })
    .catch((err) => {
        console.log(err)
    })
    ;

module.exports = ProductCategories
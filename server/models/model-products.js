const Sequelize = require('sequelize');
var sequelize = require('../configs/db-config-mysql')

const productSchema = {
    status: Sequelize.STRING,
    brand_id: Sequelize.INTEGER,
    product_category_id: Sequelize.INTEGER,
    vendor_id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    sku: Sequelize.STRING,
    bkt_id: Sequelize.STRING,
    retail_price: Sequelize.FLOAT,
    cost_price: Sequelize.FLOAT,
}
const configs = { paranoid: true, underscored: true, }
const Products = sequelize.define('products', productSchema, configs);

Products.sync(
    // { force: true }
)
    .then(() => {
        //  console.log('products is ready') 
    })
    .catch((err) => {
        console.log(err)
    })
    ;

module.exports = Products
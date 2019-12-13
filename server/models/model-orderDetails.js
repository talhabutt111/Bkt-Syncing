const Sequelize = require('sequelize');
var sequelize = require('../configs/db-config-mysql')

const orderDetailSchema = {
    order_id: { type: Sequelize.STRING },
    order_date: Sequelize.DATE,
    order_source: Sequelize.STRING,
    order_status: Sequelize.STRING,
    detail_type: Sequelize.STRING,
    product_id: Sequelize.STRING,
    product_sku: Sequelize.STRING,
    product_cost: Sequelize.FLOAT,
    product_rate: Sequelize.FLOAT,
    product_discount: Sequelize.FLOAT,
    product_qty: Sequelize.FLOAT,
    product_price: Sequelize.FLOAT,
    product_remarks: Sequelize.STRING,
    product_extra_added: Sequelize.BOOLEAN,
}
const configs = { paranoid: true, underscored: true, }
const Order_details = sequelize.define('order_details', orderDetailSchema, configs);

Order_details.sync(
    // {force:true}
)
    .then(() => {
        // console.log('order_details is ready')
    })
    .catch((err) => {
        console.log(err)
    })
    ;

module.exports = Order_details
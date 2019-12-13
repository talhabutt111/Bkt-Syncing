const Sequelize = require('sequelize');
var sequelize = require('../configs/db-config-mysql')

const orderSchema = {
    order_type: { type: Sequelize.STRING },
    order_id: { type: Sequelize.STRING },
    date: Sequelize.DATE,
    source: Sequelize.STRING,
    status: Sequelize.STRING,
    courier: Sequelize.STRING,
    tracking_id: Sequelize.STRING,
    note: Sequelize.STRING,
    total: Sequelize.FLOAT,
    total_value_added: Sequelize.FLOAT,
    customer_name: Sequelize.STRING,
    customer_contact: Sequelize.STRING,
    customer_address: Sequelize.STRING,
}
const configs = { paranoid: true, underscored: true, }
const Orders = sequelize.define('orders', orderSchema, configs);

Orders.sync(
    // { force: true }
)
    .then(() => {
        // console.log('orders is ready')
    })
    .catch((err) => {
        console.log(err)
    })
    ;

module.exports = Orders
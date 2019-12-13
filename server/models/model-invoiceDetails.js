const Sequelize = require('sequelize');
var sequelize = require('../configs/db-config-mysql')

const invoiceDetailSchema = {
    invoice_id: Sequelize.INTEGER,
    service: Sequelize.STRING,
    detail: Sequelize.STRING,
    rate: Sequelize.INTEGER,
    qty: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
}
const configs = { paranoid: true, underscored: true, }
const Invoice_details = sequelize.define('invoice_details', invoiceDetailSchema, configs);

Invoice_details.sync(
    // {force:true}
)
    .then(() => {
        // console.log('invoice_details is ready')
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = Invoice_details
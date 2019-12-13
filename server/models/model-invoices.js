const Sequelize = require('sequelize');
var sequelize = require('../configs/db-config-mysql')

const invoiceSchema = {
    date: Sequelize.DATE,
    slagme: Sequelize.STRING,
    company_id: Sequelize.INTEGER,
    c_id: Sequelize.INTEGER,
    c_address: Sequelize.STRING,
    c_number: Sequelize.STRING,
    total_amount: Sequelize.INTEGER,
}
const configs = { paranoid: true, underscored: true, }
const Invoices = sequelize.define('invoices', invoiceSchema, configs);

Invoices.sync(
    // { force: true }
)
    .then(() => {
        // console.log('invoices is ready')
    })
    .catch((err) => {
        console.log(err)
    })
    ;

module.exports = Invoices
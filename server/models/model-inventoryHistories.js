const Sequelize = require('sequelize');
var sequelize = require('../configs/db-config-mysql')

const inventoryHistorySchema = {
    bkt_id: Sequelize.INTEGER,
    option: Sequelize.STRING,
    qty: Sequelize.FLOAT,
    vendor_id: Sequelize.INTEGER
}
const configs = { paranoid: true, underscored: true, }
const InventoryHistories = sequelize.define('inventory_histories', inventoryHistorySchema, configs);

InventoryHistories.sync(
    // { force: true }
)
    .then(() => {
        //  console.log('InventoryHistories is ready') 
    })
    .catch((err) => {
        console.log(err)
    })
    ;

module.exports = InventoryHistories
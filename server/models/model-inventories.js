const Sequelize = require('sequelize');
var sequelize = require('../configs/db-config-mysql')

const inventoriesSchema = {
    bkt_id: Sequelize.INTEGER,
    qty: Sequelize.FLOAT
}
const configs = { paranoid: true, underscored: true, }
const Inventories = sequelize.define('inventories', inventoriesSchema, configs);

Inventories.sync(
    // { force: true }
)
    .then(() => {
        //  console.log('driverWiseInventories is ready') 
    })
    .catch((err) => {
        console.log(err)
    })
    ;

module.exports = Inventories
var Inventories = require('../models/model-inventories')

module.exports = function (server) {

    server.all('/manualUpdateInventories', (req, res) => {
        let newInventory = {
            bkt_id: req.body.bktId,
            qty: req.body.qty
        }
        Inventories
            .findOne({
                where: {
                    bkt_id: req.body.bktId,
                }
            })
            .then((inventory) => {
                if (inventory) {
                    let comingQty = req.body.qty;
                    let existingQty = inventory.qty;
                    let updatedQty = req.body.updateOption === 'create' ? Number(existingQty) + Number(comingQty) : Number(existingQty) - Number(comingQty)

                    inventory
                        .update({
                            qty: updatedQty
                        })
                        .then((inventory) => {
                            res.json({ success: true, data: inventory, message: 'Inventory updated successfully.' })
                        })
                }
                else {
                    Inventories.create(newInventory)
                        .then((inventory) => {
                            res.json({ success: true, data: inventory, message: 'Inventory created.' })
                        })
                }
            })
            .catch((err) => {
                res.json({ success: false, err: err, message: 'something went wrong.' })
            })
    })

    server.get('/getAllInventories', (req, res) => {
        Inventories.findAll()
            .then(inventories => {
                res.json({ success: true, data: inventories })
            })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })

    // server.delete('/deleteLocationInventory', (req, res) => {
    //     LocationWiseInventories
    //         .findOne({
    //             where: {
    //                 id: req.body.value
    //             }
    //         })
    //         .then(inventory => {
    //             return inventory.destroy();
    //         })
    //         .then(inventory => {
    //             res.json({ success: true, data: inventory, message: 'Inventory deleted.' })
    //         })
    //         .catch((err) => {
    //             res.json({ success: false, err: err })
    //         })
    // })

    // server.get('/getSpecificProductInventory/:id', (req, res) => {
    //     LocationWiseInventories
    //         .findAll({ where: { operator_id: req.params.id } })
    //         .then(inventories => {
    //             res.json({ success: true, data: inventories })
    //         })
    //         .catch((err) => {
    //             res.json({ success: false, err: err })
    //         })
    // })


    // server.put('/updateLocationInventory', (req, res) => {
    //     LocationWiseInventories
    //         .findOne({ where: { id: req.body.id } })
    //         .then(inventory => {
    //             inventory
    //                 .update({
    //                     operator_id: req.body.operatorId,
    //                     product_id: req.body.productId,
    //                     qty: req.body.qty
    //                 })
    //                 .then((inventory) => {
    //                     res.json({ success: true, data: inventory, message: ' updated successfully.' })
    //                 })
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             res.json({ success: false, message: 'Something went wrong.', err: err })
    //         })
    // })

    server.put('/autoUpdateInventories', (req, res) => {
        let newInventory = {
            bkt_id: req.body.bktId,
            qty: req.body.qty
        }
        Inventories
            .findOne({
                where: {
                    bkt_id: req.body.bktId,
                }
            })
            .then(inventory => {
                if (inventory) {
                    let comingQty = req.body.qty;
                    let existingQty = inventory.qty;
                    let updatedQty = req.body.transaction === 'sale' ? Number(existingQty) - Number(comingQty) : Number(existingQty) + Number(comingQty)
                    inventory
                        .update({
                            qty: updatedQty
                        })
                        .then((inventory) => {
                            res.json({ success: true, data: inventory, message: 'inventory auto-updated successfully.' })
                        })
                }
                else {
                    newInventory.qty = req.body.transaction === 'sale' ? newInventory.qty : -newInventory.qty
                    Inventories.create(newInventory)
                        .then((inventory) => {
                            res.json({ success: true, data: inventory, message: 'Inventory created.' })
                        })
                }
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })

    server.post('/checkItemQty', (req, res) => {
        Inventories
            .findOne({
                where: {
                    bkt_id: req.body.bktId
                }
            })
            .then(inventory => {
                res.json({ success: true, data: inventory })
            })
            .catch((err) => {
                res.json({ success: false, err: err })

            })
    })

}
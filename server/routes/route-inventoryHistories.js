var InventoryHistories = require('../models/model-inventoryHistories')

module.exports = function (server) {

    server.post('/addNewInventoryHistory', (req, res) => {
        let history = {
            bkt_id: req.body.bktId,
            option: req.body.updateOption,
            qty: req.body.qty,
            vendor_id: req.body.vendor
        }
        InventoryHistories
            .create(history)
            .then((history) => {
                res.json({ success: true, data: history, message: 'History created' })
            })
            .catch((err) => {
                res.json({ success: false, err: err, message: 'something went wrong' })
            })
    })

    server.get('/getAllInventoryHistories', (req, res) => {
        InventoryHistories.findAll()
            .then(histories => {
                res.json({ success: true, data: histories })
            })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })

    // server.delete('/deleteInventoryHistory', (req, res) => {
    //     InventoryHistories
    //         .findOne({ where: { id: req.body.value } })
    //         .then(history => {
    //             return history.destroy();
    //         })
    //         .then(history => {
    //             res.json({ success: true, data: history, message: 'History deleted.' })
    //         })
    //         .catch((err) => {
    //             res.json({ success: false, err: err })
    //         })
    // })


}





























// var con = require('../configs/db-config-mysql')

// module.exports = function (server) {

//     server.post('/addNewUser', (req, res) => {
//         var user = {
//             name: req.body.name,
//             email: req.body.email,
//             cell: req.body.cell,
//             address: req.body.address,
//             username: req.body.username,
//             password: req.body.password
//         }
//         var sql = `INSERT INTO users (name, email, cell, address, username, password) VALUES ('${user.name}','${user.email}','${user.cell}','${user.address}','${user.username}','${user.password}')`;
//         con.query(sql, function (err, result) {
//             if (err) {
//                 // throw err
//                 return res.json({ success: false, err: err })
//             }
//             res.json({ success: true, data: user, id: result.insertId })
//         }
//         );


//     })
// }
var ProductCategories = require('../models/model-productCategories')

module.exports = function (server) {

    server.post('/addNewProductCategory', (req, res) => {
        let productCategory = {
            name: req.body.name,
            description: req.body.description
        }
        ProductCategories.findOrCreate({ where: { name: req.body.name }, defaults: productCategory })
            .then(([productCategory, created]) => {
                if (created) {
                    res.json({ success: true, data: productCategory, message: `Product-Category: ${productCategory.name} registered successfully.` })
                }
                if (!created) {
                    res.json({ success: false, message: `Product-Category with name: ${productCategory.name} already exists.` })
                }
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err, message: 'something went wrong' })
            })
    })

    server.get('/getAllProductCategories', (req, res) => {
        ProductCategories.findAll()
            .then(productCategories => {
                res.json({ success: true, data: productCategories })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })

    server.delete('/deleteProductCategory', (req, res) => {
        ProductCategories.findOne({ where: { id: req.body.value } })
            .then(productCategory => {
                return productCategory.destroy();
            })
            .then(productCategory => {
                res.json({ success: true, data: productCategory, message: `Product-Category: ${productCategory.name} deleted.` })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })

    server.put('/updateProductCategory', (req, res) => {
        ProductCategories.findOne({ where: { id: req.body.id } })
            .then(productCategory => {
                productCategory
                    .update({
                        name: req.body.name,
                        description: req.body.description
                    })
                    .then((productCategory) => {
                        res.json({ success: true, data: productCategory, message: 'Product-Category updated successfully.' })
                    })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })

    server.get('/getSpecificProductCategory/:id', (req, res) => {
        ProductCategories.findOne({ where: { id: req.params.id } })
            .then(productCategory => {
                res.json({ success: true, data: productCategory })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })
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
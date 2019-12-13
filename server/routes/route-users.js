var Users = require('../models/model-users')




  module.exports = function (server) {

    server.post('/addNewUser', (req, res) => {

        let user = {
            name: req.body.name,
            email: req.body.email,
            cell: req.body.cell,
            address: req.body.address,
            username: req.body.username,
            password: req.body.password,
            role_id: req.body.roleId,
            cnic: req.body.cnic,
            shop_name: req.body.shopName,
            shop_cell: req.body.shopCell,
            shop_address: req.body.shopAddress,
            bank_name: req.body.bankName,
            branch_name: req.body.branchName,
            branch_code: req.body.branchCode,
            account_id: req.body.accountNumber,
            account_title: req.body.accountTitle,
            iban_id: req.body.ibanNumber,
            cost_price_percent: req.body.costPricePercent,
            retail_price_percent: req.body.retailPricePercent
        }
        Users
            .findOrCreate({ where: { username: req.body.username }, defaults: user })
            .then(([user, created]) => {

                if (created) {
                    res.json({ success: true, data: user, message: 'Registered successfully.' })
                }
                if (!created) {
                    res.json({ success: false, message: 'This username already exists.' })
                }
            })
            .catch((err) => {
                console.log(err);

                res.json({ success: false, err: err, message: 'something went wrong' })
            })
    })

    server.get('/getAllUsers', (req, res) => {
        Users.findAll(
        ).then(users => {
            res.json({ success: true, data: users })
        })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })

    server.get('/mera', (req, res) => {
       res.json({
           message:'mera route ya ha'
       })
    })

    server.delete('/deleteUser', (req, res) => {
        Users
            .findOne({ where: { id: req.body.value } })
            .then(user => {
                return user.destroy();
            })
            .then(user => {
                res.json({ success: true, data: user, message: 'deleted.' })
            })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })

    server.put('/updateUser', (req, res) => {
        Users
            .findOne({ where: { username: req.body.username, id: { $not: req.body.id } } })
            .then(user => {
                user
                    ?
                    res.json({ success: false, message: 'This username already exists.' })
                    :
                    Users
                        .findOne({ where: { id: req.body.id } })
                        .then(user => {
                            user
                                .update({
                                    name: req.body.name,
                                    email: req.body.email,
                                    cell: req.body.cell,
                                    address: req.body.address,
                                    username: req.body.username,
                                    password: req.body.password,
                                    role_id: req.body.roleId,
                                    cnic: req.body.cnic,
                                    shop_name: req.body.shopName,
                                    shop_cell: req.body.shopCell,
                                    shop_address: req.body.shopAddress,
                                    bank_name: req.body.bankName,
                                    branch_name: req.body.branchName,
                                    branch_code: req.body.branchCode,
                                    account_id: req.body.accountNumber,
                                    account_title: req.body.accountTitle,
                                    iban_id: req.body.ibanNumber,
                                    cost_price_percent: req.body.costPricePercent,
                                    retail_price_percent: req.body.retailPricePercent
                                })
                                .then((user) => {
                                    res.json({ success: true, data: user, message: ' updated successfully.' })
                                })
                        })
                        .catch((err) => {
                            console.log(err);
                            res.json({ success: false, message: 'Something went wrong.', err: err })
                        })
            })
            .catch(err => {
                console.log(err);
            })
    })

    server.get('/getSpecificUser/:id', (req, res) => {
        Users
            .findOne({ where: { id: req.params.id } })
            .then(user => {
                res.json({ success: true, data: user })
            })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })
}



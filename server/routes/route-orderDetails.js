var Order_details = require('../models/model-orderDetails')

module.exports = function (server) {

    server.post('/addNewOrderDetails', (req, res) => {
        let orderDetails = req.body.orderDetails, resArray = [], promises = []
        orderDetails.forEach(detail => {
            let promise = Order_details.create(detail)
                .then(createdDetail => {
                    resArray.push({ success: true, data: createdDetail, message: `order_detail: ${createdDetail.product_sku} created successfully. ` })
                })
                .catch(err => {
                    console.log(err)
                    resArray.push({ success: false, err: err, message: 'something went wrong' })
                })
            promises.push(promise)
        })

        Promise.all(promises).then(() => {
            res.json({ data: resArray })
        })
    })

    server.get('/getSpecificAllOrderDetails/:id', (req, res) => {
        Order_details.findAll({ where: { order_id: req.params.id } })
            .then(order_details => {
                res.json({ success: true, data: order_details })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })


    server.delete('/deleteOrderDetail', (req, res) => {
        Order_details.findOne({ where: { id: req.body.id } })
            .then(order_detail => {
                return order_detail.destroy();
            })
            .then(order_detail => {
                res.json({ success: true, data: order_detail, message: 'order_detail with name: ' + order_detail.product_name + ' deleted.' })
            })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })

    server.delete('/deleteOrderDetails', (req, res) => {
        Order_details.destroy({ where: { order_id: req.body.orderId } })
            .then(order_details => {
                res.json({ success: true, data: order_details, message: ' deleted.' })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })

    server.put('/updateOrderDetails', (req, res) => {
        Order_details.update(
            {
                order_date: req.body.orderDate,
                order_source: req.body.orderSource,
                order_status: req.body.orderStatus,
                // product_name: req.body.pName,
                // product_sku: req.body.pSKU,
                // product_cost: req.body.pCost,
                // product_rate: req.body.pRate,
                // product_discount: req.body.pDiscount,
                // product_qty: req.body.pQTY,
                // product_price: req.body.pPrice,
                // product_remarks: req.body.pRemarks,
                // product_extra_added: req.body.pChecked
            },
            { where: { order_id: req.body.orderId } })
            .then(([affectedCount, affectedRows]) => {
                res.json({ success: true, data: affectedRows, count: affectedCount })
                // res.json({ success: true, data: order_detail, message: 'order_detail with id: ' + order_detail.id + ' updated successfully.' })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })

    server.get('/getAllOrderDetails', (req, res) => {
        Order_details.findAll()
            .then(order_details => {
                // console.log(order_details);
                res.json({ success: true, data: order_details })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })
}


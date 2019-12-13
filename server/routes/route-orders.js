var Orders = require('../models/model-orders')

module.exports = function (server) {

    server.post('/addNewOrder', (req, res) => {
        let newOrder = {
            order_type: req.body.orderType,
            order_id: req.body.orderId,
            date: req.body.date,
            source: req.body.source,
            status: req.body.status,
            courier: req.body.courier,
            tracking_id: req.body.trackingId,
            note: req.body.note,
            total: req.body.total,
            total_value_added: req.body.totalAddedValue,
            customer_name: req.body.cName,
            customer_contact: req.body.cContact,
            customer_address: req.body.cAddress,
        }
        Orders.findOrCreate({ where: { order_id: req.body.orderId }, defaults: newOrder })
            .then(([order, created]) => {
                if (created) {
                    res.json({ success: true, data: order, message: 'Order created successfully.' })
                }
                if (!created) {
                    res.json({ success: false, message: `order-Id: ${order.order_id} already exists.` })
                }
            })
            .catch((err) => {
                res.json({
                    success: false, err: err, message: err.name === "SequelizeUniqueConstraintError" ?
                        'Order-id must be unique.' : 'Something went wrong.'
                })
            })
    })

    server.get('/getAllOrders', (req, res) => {
        Orders.findAll()
            .then(orders => {
                res.json({ success: true, data: orders })
            })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })

    server.delete('/deleteOrder', (req, res) => {
        Orders.findOne({ where: { id: req.body.value } })
            .then(order => {
                return order.destroy();
            })
            .then(order => {
                res.json({ success: true, data: order, message: `order with order-id: ${order.order_id} deleted.` })
            })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })

    server.put('/updateOrder', (req, res) => {
        Orders.findOne({ where: { id: req.body.id } })
            .then(order => {
                order.update({
                    date: req.body.date,
                    source: req.body.source,
                    status: req.body.status,
                    courier: req.body.courier,
                    tracking_id: req.body.trackingId,
                    note: req.body.note,
                    total: req.body.total,
                    total_value_added: req.body.totalAddedValue,
                    customer_name: req.body.cName,
                    customer_contact: req.body.cContact,
                    customer_address: req.body.cAddress,
                })
                    .then((order) => {
                        res.json({ success: true, data: order, message: `order with order-id: ${order.order_id} updated successfully.` })
                    })
                    .catch(err => {
                        console.log(err);
                        res.json({ success: false, err: err, message: 'Something went wrong.Please try again.' })
                    })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err, message: 'Order not found.' })
            })
    })

    // server.get('/getLastOrderID', (req, res) => {
    //     Orders.findAll(
    //         {
    //             limit: 1,
    //             order: [['id', 'DESC']]
    //         }
    //     ).then(orders => {
    //         res.json({ success: true, data: orders })
    //     })
    //         .catch((err) => {
    //             res.json({ success: false, err: err })
    //         })
    // })

    server.get('/getSpecificOrder/:id', (req, res) => {
        // console.log(req);
        Orders.findOne({ where: { id: req.params.id } })
            .then(order => {
                res.json({ success: true, data: order })
            })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })

    // server.put('/updateOrderTotal', (req, res) => {
    //     Orders.findOne({ where: { id: req.body.id } })
    //         .then(order => {
    //             if (req.body.pChecked) {
    //                 let comingPrice = req.body.pPrice;
    //                 let existingTotalValueAdded = order.total_value_added;
    //                 let updatedTotalValueAdded = existingTotalValueAdded - comingPrice

    //                 let existingTotal = order.total;
    //                 let updatedTotal = existingTotal - comingPrice
    //                 order
    //                     .update({
    //                         total: updatedTotal,
    //                         total_value_added: updatedTotalValue
    //                     })
    //             }
    //             else {
    //                 let comingPrice = req.body.price;
    //                 let existingTotal = order.total;
    //                 let updatedTotal = existingTotal - comingPrice

    //                 order
    //                     .update({
    //                         total: updatedTotal
    //                     })
    //             }
    //         })
    //         .then((order) => {
    //             res.json({ success: true, data: order, message: 'order with id: ' + order.id + ' updated successfully.' })
    //         })
    //         .catch((err) => {
    //             res.json({ success: false, err: err })
    //         })
    // })
}
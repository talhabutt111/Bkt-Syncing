var Products = require('../models/model-products')

module.exports = function (server) {

    server.post('/addNewProduct', (req, res) => {

        let product = {
            status: req.body.status,
            brand_id: req.body.brandId,
            product_category_id: req.body.categoryId,
            vendor_id: req.body.vendorId,
            name: req.body.name,
            sku: req.body.sku,
            bkt_id: req.body.bktId,
            // retail_price: req.body.retailPrice,
            // cost_price: req.body.costPrice,
        }
        Products
            .findOrCreate({ where: { bkt_id: req.body.bktId }, defaults: product })
            .then(([product, created]) => {
                if (created) {
                    res.json({ success: true, data: product, message: `Product: ${product.name} created successfully.` })
                }
                if (!created) {
                    res.json({ success: false, message: `This product is already exists.` })
                }
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err, message: 'something went wrong' })
            })
    })

    server.get('/getAllProducts', (req, res) => {
        Products.findAll()
            .then(products => {
                res.json({ success: true, data: products })
            })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })

    server.delete('/deleteProduct', (req, res) => {
        Products
            .findOne({ where: { id: req.body.value } })
            .then(product => {
                return product.destroy();
            })
            .then(product => {
                res.json({ success: true, data: product, message: `Product: ${product.name} deleted.` })
            })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })

    server.put('/updateProduct', (req, res) => {
        Products
            .findOne({ where: { bkt_id: req.body.bktId, id: { $not: req.body.id } } })
            .then(user => {
                user
                    ?
                    res.json({ success: false, message: 'Another product have that product-ID from bucket.' })
                    :
                    Products
                        .findOne({ where: { id: req.body.id } })
                        .then(product => {
                            product
                                .update({
                                    status: req.body.status,
                                    brand_id: req.body.brandId,
                                    product_category_id: req.body.categoryId,
                                    vendor_id: req.body.vendorId,
                                    name: req.body.name,
                                    sku: req.body.sku,
                                    bkt_id: req.body.bktId,
                                    retail_price: req.body.retailPrice,
                                    cost_price: req.body.costPrice,
                                })
                                .then((product) => {
                                    res.json({ success: true, data: product, message: `Product: ${product.name} updated successfully.` })
                                })
                        })
                        .catch((err) => {
                            console.log(err);
                            res.json({ success: false, message: 'Something went wrong.', err: err })
                        })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, message: 'Something went wrong.', err: err })
            })
    })

    server.get('/getSpecificProduct/:id', (req, res) => {
        Products
            .findOne({ where: { id: req.params.id } })
            .then(product => {
                res.json({ success: true, data: product })
            })
            .catch((err) => {
                res.json({ success: false, err: err })
            })
    })
}
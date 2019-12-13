var Brands = require('../models/model-brands')

module.exports = function (server) {

    server.post('/addNewBrand', (req, res) => {
        let brand = {
            name: req.body.name,
            description: req.body.description
        }
        Brands.findOrCreate({ where: { name: req.body.name }, defaults: brand })
            .then(([brand, created]) => {
                if (created) {
                    res.json({ success: true, data: brand, message: `Brand: '${brand.name}' registered successfully.` })
                }
                if (!created) {
                    res.json({ success: false, message: `Brand with name: '${brand.name}' already exists.` })
                }
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err, message: 'something went wrong' })
            })
    })

    server.get('/getAllBrands', (req, res) => {
        Brands.findAll()
            .then(brands => {
                res.json({ success: true, data: brands })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })

    server.delete('/deleteBrand', (req, res) => {
        Brands.findOne({ where: { id: req.body.value } })
            .then(brand => {
                return brand.destroy();
            })
            .then(brand => {
                res.json({ success: true, data: brand, message: `Brand: '${brand.name}' deleted.` })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })

    server.put('/updateBrand', (req, res) => {
        Brands.findOne({ where: { id: req.body.id } })
            .then(brand => {
                brand
                    .update({
                        name: req.body.name,
                        description: req.body.description
                    })
                    .then((brand) => {
                        res.json({ success: true, data: brand, message: 'Brand updated successfully.' })
                    })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })

    server.get('/getSpecificBrand/:id', (req, res) => {
        Brands.findOne({ where: { id: req.params.id } })
            .then(brand => {
                res.json({ success: true, data: brand })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })
}
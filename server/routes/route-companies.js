var Companies = require('../models/model-companies')
const uploadImage = require('../configs/multer-config')


module.exports = function (server) {
    server.post('/addNewCompany', (req, res) => {
        uploadImage(req, res, (err) => {
            if (err) {
                console.log('first err', err);
                res.json({
                    success: false, message: err.message
                });
            } else {
                if (req.file == undefined) {
                    console.log('Error: No File Selected!')
                    res.json({
                        success: false, message: 'Error: No File found!'
                    });
                } else {
                    let newCompany = {
                        name: req.body.name,
                        email: req.body.email,
                        cell: req.body.cell,
                        address: req.body.address,
                        logo: req.file.filename,
                    }
                    Companies.findOrCreate({ where: { name: req.body.name }, defaults: newCompany })
                        .then(([company, created]) => {
                            if (created) {
                                res.json({ success: true, data: company, message: `Company: '${company.name}' registered successfully.` })
                            }
                            if (!created) {
                                res.json({ success: false, message: `This Company already exists.` })
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            res.json({ success: false, err: err, message: 'something went wrong' })
                        })

                    // res.json({
                    //     success: true,
                    //     message: 'File Uploaded!',
                    //     fileName: `${req.file.filename}`

                    // });
                }
            }
        });
    });

    server.get('/getAllCompanies', (req, res) => {
        Companies.findAll()
            .then(companies => {
                res.json({ success: true, data: companies })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })

    server.delete('/deleteCompany/:id', (req, res) => {

        Companies.findOne({ where: { id: req.params.id } })
            .then(company => {
                if (company)
                    return company.destroy();
            })
            .then(company => {
                res.json({ success: true, data: company, message: `Company: '${company.name}' deleted.` })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })

    server.put('/updateCompany', (req, res) => {
        uploadImage(req, res, (err) => {
            if (err) {
                console.log('first err', err);
                res.json({
                    success: false, message: err.message
                });
            } else {
                if (req.file == undefined) {
                    console.log('Error: No File Selected!')
                    res.json({
                        success: false, message: 'Error: No File found!'
                    });
                } else {
                    Companies.findOne({ where: { id: req.body.id } })
                        .then(company => {
                            company
                                .update({
                                    name: req.body.name,
                                    email: req.body.email,
                                    cell: req.body.cell,
                                    address: req.body.address,
                                    logo: req.file.filename,
                                })
                                .then((company) => {
                                    res.json({ success: true, data: company, message: 'Company details updated successfully.' })
                                })
                        })
                        .catch((err) => {
                            console.log(err);
                            res.json({ success: false, err: err })
                        })
                }
            }
        });

    })

    server.get('/getSpecificCompany/:id', (req, res) => {
        Companies.findOne({ where: { id: req.params.id } })
            .then(company => {
                res.json({ success: true, data: company })
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false, err: err })
            })
    })
}
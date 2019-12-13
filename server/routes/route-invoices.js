const Invoices = require('../models/model-invoices');


module.exports = (server) => {

    //Get All Invoices
    server.get('/getAllInvoices', (req, res) => {
        Invoices.findAll()
            .then(invoices => res.json({ success: true, data: invoices }))
            .catch(err => res.json({ success: false, err: err }));
    });

    //Get one Invoice
    server.get('/getSpecificInvoice/:id', (req, res) => {
        const invoice_id = req.params.id;
        Invoices.findAll({
            where: {
                id: invoice_id
            },
        })
            .then(invoice => {
                // console.log(invoice);
                res.json({ success: true, data: invoice })
            })
            .catch(err => res.json({ success: false, err: err }));
    });

    //Create New Invoice
    server.post('/addNewInvoice', (req, res) => {

        const invoice = {
            slagme: req.body.slagme,
            company_id: req.body.companyId,
            c_id: req.body.cId,
            c_address: req.body.address,
            c_number: req.body.number,
            date: req.body.date,
            total_amount: req.body.total_amount,
        };
        Invoices.create(invoice)
            .then((invoice) => {
                res.json({ success: true, data: invoice, message: 'Invoice has been created successfully.' })
            })
            .catch(err => res.json({
                success: false, err: err, message: 'Somthing wrong with invoice-data.'
            }))
    });

    //Delete single Invoices
    server.delete('/deleteInvoice/:id', (req, res) => {
        Invoices.destroy(
            {
                where: {
                    id: req.params.id
                }
            }).then((data) =>
                res.json({ success: true, data: data, message: 'Invoice has been deleted successfully.' }

                ))
            .catch(err => res.json({ success: false, err: err }));
    });

    //Update Invoices
    server.put('/updateInvoice/:id', (req, res) => {
        const invoice_id = req.params.id;
        Invoices.update(
            {
                company_id: req.body.companyId,
                c_id: req.body.cId,
                c_address: req.body.address,
                c_number: req.body.number,
                date: req.body.date,
                total_amount: req.body.total_amount,
            },
            {
                where:
                    { id: invoice_id }
            }
        )
            .then((invoice) => res.json({ success: true, data: invoice, messsage: 'Invoice updated successfully.' }))
            .catch(err => res.json({ success: false, err: err }))
    });
}
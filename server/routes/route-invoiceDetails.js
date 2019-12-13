const InvoiceDetails = require('../models/model-invoiceDetails');


module.exports = (server) => {

    server.post('/addNewInvoiceDetails', (req, res) => {
        const invoiceDetails = req.body;
        InvoiceDetails.bulkCreate(invoiceDetails)
            .then((data) => res.json({ success: true, data: data, message: 'Invoice-details Created successfully.' }))
            .catch(err => {
                console.log(err)
                res.json({ success: false, err: err, message: 'Something wrong with invoice-details.' })
            });
    });

    server.get('/getSpecificInvoiceDetails/:slagme', (req, res) => {
        const invoice_id = req.params.slagme;
        InvoiceDetails.findAll({
            where: {
                invoice_id: invoice_id
            }
        })
            .then(details => res.json({ success: true, data: details }))
            .catch(err => res.json({ success: false, err: err }));
    });

    server.get('/getAllInvoiceDetails', (req, res) => {
        InvoiceDetails.findAll({})
            .then(details => res.json({ success: true, data: details }))
            .catch(err => res.json({ success: false, err: err }));
    });

    server.delete('/deleteInvoiceDetails/:slagme', (req, res) => {
        InvoiceDetails.destroy(
            {
                where: {
                    invoice_id: req.params.slagme
                }
            }).then((details) =>
                res.json({ success: true, data: details, message: 'Invoice-Data has been deleted successfully' }

                ))
            .catch(err => res.json({ success: false, err: err }));
    });
}
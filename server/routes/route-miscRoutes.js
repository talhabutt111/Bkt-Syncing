let path = require('path'), fs = require('fs')




module.exports = (server) => {

    server.get('/getImage/:filename', (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/uploads/images', req.params.filename));
    });

    server.delete('/deleteImage/:filename', (req, res) => {
        fs.unlink(path.join(__dirname, '../../public/uploads/images', req.params.filename), (err) => {
            if (err) {
                console.log(err);
                res.json({ success: false, err: err })
            }
            else {
                // console.log('Image successfully deleted.');
                res.json({ success: true, message: `Image named as: ${req.params.filename} deleted successfully` })
            }
        })
    });
}
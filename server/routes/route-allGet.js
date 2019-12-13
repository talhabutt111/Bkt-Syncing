const path = require('path');

module.exports = function (server) {

    server.get('/*', function (req, res) {

        res.sendFile(path.join(__dirname, '../../build', '../build/index.html'), function (err) {
            if (err) {
                console.log(err);
                res.status(500).send(err)
            }
        });
    });
}

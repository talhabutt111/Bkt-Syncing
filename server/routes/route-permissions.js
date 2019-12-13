var Permissions = require('../models/model-permissions')

module.exports = function (server) {

    server.post('/addNewPermission', (req, res) => {
        let newPermission = {
            permission: req.body.permission,
            entity: req.body.entity,
            slug: req.body.slug
        }
        Permissions
            .findOrCreate({
                where: {
                    slug: req.body.slug
                }, defaults: newPermission
            })
            .then(([permission, created]) => {

                if (created) {
                    res.json({ success: true, data: permission, message: 'Permission: ' + permission.slug + ' registered successfully.' })
                }
                if (!created) {
                    res.json({ success: false, message: 'Permission: ' + permission.permission + 'on this entity already exists.' })
                }

            })
            .catch((err) => {
                res.json({ success: false, err: err, message: 'something went wrong' })

            })

    })

    server.get('/getAllPermissions', (req, res) => {
        // Users.findAll({ where: { name: 'abc' } }).then(users => {
        Permissions.findAll(
            // { limit: req.body.limit }
        ).then(permissions => {
            res.json({ success: true, data: permissions })

        })
            .catch((err) => {
                res.json({ success: false, err: err })

            })
    })
    server.delete('/deletePermission', (req, res) => {
        Permissions
            .findOne({ where: { id: req.body.value } })
            .then(permission => {
                return permission.destroy();
            })
            .then(permission => {
                res.json({ success: true, data: permission, message: 'Permission : ' + permission.slug + ' deleted.' })

            })
            .catch((err) => {
                res.json({ success: false, err: err })

            })
    })
}


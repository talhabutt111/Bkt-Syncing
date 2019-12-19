
let WPAPI = require('wpapi');

module.exports = (server) => {

    let wp = new WPAPI({
        endpoint: 'https://bktstaging.devzonesolutions.com/wp-json',
        // username: 'muzzammal.idrees',
        // password: 'Dtp@lCJeCguyvEIbW0BMP7Oh'
    });

    // var token;
    var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYmt0c3RhZ2luZy5kZXZ6b25lc29sdXRpb25zLmNvbSIsImlhdCI6MTU3NjE2NDc4NCwibmJmIjoxNTc2MTY0Nzg0LCJleHAiOjE1NzY3Njk1ODQsImRhdGEiOnsidXNlciI6eyJpZCI6IjM1NCJ9fX0.xNdzNCnoUbBfMI-HuyYbhZnNxEKyU2Ld_Vr3SjqdOTQ';
    // ---------------------------------------------wordpress REST APi------------------------------

    // wp.getToken = wp.registerRoute(
    //     'jwt-auth/v1',
    //     'token',
    //     { params: ['username', 'password'] }
    // )

    // wp.validateToken = wp.registerRoute(
    //     'jwt-auth/v1/token',
    //     'validate',
    // )

    // wp.getToken()
    //     // .param({ username: 'muzzammal.idrees', password: "Dtp@lCJeCguyvEIbW0BMP7Oh" })
    //     .username('muzzammal.idrees').password('Dtp@lCJeCguyvEIbW0BMP7Oh')
    //     .create()
    //     .then(res => {
    //         console.log(res)
    //         token = res.token
    // console.log(token);
    wp.setHeaders({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' })
    //     wp.validateToken().create()
    //         .then(res => console.log(res))
    //         .catch(err => console.error(err))
    // })
    // .catch(err => console.error(err))

    // wp.validateToken().create()
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err))

    server.get('/allbktwp', (req, res) => {
        console.log('mybkt');
        wp.users().create({ username: 'tesTing', password: 'test', email: 'test@test.com' })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        wp.users().get()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    })


}
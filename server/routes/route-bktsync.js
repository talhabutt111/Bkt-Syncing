
// var wooCommerce = require('woocommerce-api');
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;




module.exports = (server) => {

    const apiData = {
        url: 'https://bktstaging.devzonesolutions.com',
        consumerKey: 'ck_04f60a0f9ff393bf09ee503c70770194ac8d2d13',
        consumerSecret: 'cs_73ec96bff3b762d1bcfb74cac0e9c4258e30242c',
        wpAPI: true,
        version: 'wc/v3',
        queryStringAuth: true
        // wpAPIPrefix	:'wps'
    }

    var WooCommerce = new WooCommerceRestApi(apiData);
    // var WooCommerce = new wooCommerce(apiData);




    server.get('/allbkt', (req, res) => {
        console.log('mybkt');



        // ---------------------------------------------WooCommerece REST APi------------------------------



        // List products
        WooCommerce.get("orders", {
            per_page: 20, // 20 products per page
        })
            .then((response) => {
                // Successful request
                console.log(response);
                console.log("Response Status:", response.status);
                console.log("Response Headers:", response.headers);
                console.log("Response Data:", response.data);
                console.log("Total of pages:", response.headers['x-wp-totalpages']);
                console.log("Total of items:", response.headers['x-wp-total']);
            })
            .catch((error) => {
                // Invalid request, for 4xx and 5xx statuses
                console.log("Response Status:", error.response.status);
                console.log("Response Headers:", error.response.headers);
                console.log("Response Data:", error.response.data);
            })
            .finally(() => {
                // Always executed.
            });



        // Create a product
        // WooCommerce.post("products", {
        //     name: "Premium Quality", // See more in https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties
        //     type: "simple",
        //     regular_price: "21.99",
        // })
        //     .then((response) => {
        //         // Successful request
        //         console.log("Response Status:", response.status);
        //         console.log("Response Headers:", response.headers);
        //         console.log("Response Data:", response.data);
        //     })
        //     .catch((error) => {
        //         // Invalid request, for 4xx and 5xx statuses
        //         console.log("Response Status:", error.response.status);
        //         console.log("Response Headers:", error.response.headers);
        //         console.log("Response Data:", error.response.data);
        //     })
        //     .finally(() => {
        //         // Always executed.
        //     });



        // Edit a product
        // WooCommerce.put("products/163410 ", {
        //     sale_price: "16.99", // See more in https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties
        // })
        //     .then((response) => {
        //         // Successful request
        //         console.log("Response Status:", response.status);
        //         console.log("Response Headers:", response.headers);
        //         console.log("Response Data:", response.data);
        //     })
        //     .catch((error) => {
        //         // Invalid request, for 4xx and 5xx statuses
        //         console.log("Response Status:", error.response.status);
        //         console.log("Response Headers:", error.response.headers);
        //         console.log("Response Data:", error.response.data);
        //     })
        //     .finally(() => {
        //         // Always executed.
        //     });




        // Delete a product
        // WooCommerce.delete("products/163411", {
        //     force: true, // Forces to delete instead of move to the Trash
        // })
        //     .then((response) => {
        //         // Successful request
        //         console.log("Response Status:", response.status);
        //         console.log("Response Headers:", response.headers);
        //         console.log("Response Data:", response.data);
        //     })
        //     .catch((error) => {
        //         // Invalid request, for 4xx and 5xx statuses
        //         console.log("Response Status:", error.response.status);
        //         console.log("Response Headers:", error.response.headers);
        //         console.log("Response Data:", error.response.data);
        //     })
        //     .finally(() => {
        //         // Always executed.
        //     });



        // ---------------------------------------------WooCommerece APi------------------------------
        // WooCommerce.getAsync('')
        // WooCommerce.getAsync('products')
        //     .then((response) => {
        //         console.log(response);
        //         var a = response.toJSON()
        //         // var a = JSON.parse(res.toJSON().body)
        //         var b = JSON.parse(a.body)
        //         console.log(a);
        //         console.log(b);
        //         res.json({ data: b })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    })

}

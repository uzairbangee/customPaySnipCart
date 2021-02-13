const axios = require('axios');

require('dotenv').config();
exports.handler = async function(event, context, callback) {   
    // Get request's body
    const request = JSON.parse(event.body)
    console.log(request);

    const SITE_URL = process.env.URL || 'http://localhost:8888';

    // Validate that the request is coming from Snipcart
    const response = await axios.get(`https://payment.snipcart.com/api/public/custom-payment-gateway/validate?publicToken=${request.publicToken}`)

    console.log("RESPONSE", response);
    // Return a 404 if the request is not from Snipcart
    if (!response.ok) return {
        statusCode: 404,
        body: ""
    }

    // Create a payment method list
    let paymentMethodList = [{
        id: '1',
        name: 'Peach Payments',
        iconUrl: '<payment_method_icon_url_optional>',
        checkoutUrl: `https://stoic-brown-2067fd.netlify.app/pay`,
    }]

    console.log(paymentMethodList);

    // Return successful status code and available payment methods
    return {
        statusCode: 200,
        body: JSON.stringify(paymentMethodList)
    };
}
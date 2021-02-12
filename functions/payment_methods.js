exports.handler = async function(event, context, callback) {   
    // Get request's body
    const request = JSON.parse(event.body)

    const SITE_URL = process.env.URL || 'http://localhost:8888';

    // Validate that the request is coming from Snipcart
    const response = await fetch(`https://payment.snipcart.com/api/public/custom-payment-gateway/validate?publicToken=${request.PublicToken}`)

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
        checkoutUrl: `${SITE_URL}/pay`,
    }]

    // Return successful status code and available payment methods
    return {
        statusCode: 200,
        body: JSON.stringify(paymentMethodList)
    };
}
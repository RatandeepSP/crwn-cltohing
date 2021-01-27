import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IECpQCTcAOEtR6GvnB7dLP3KWroEy8ylD09Ru1YmFYeE9krrYdyiWVSdqL6BnEmbpRH3uufuPIMUDpCBAWpg1BG0053iznGbB';
    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }
    return (
        <StripeCheckout
            label= 'Pay Now'
            name='CRW clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token= {onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
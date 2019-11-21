import React from 'react';
// import './StripeButton.scss';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default function StripeCheckoutButton({ price }) {
  const publishableKey = 'pk_test_sDLdxDevqO92iJKzcODTf8lW';
  const priceForStripe = price * 100;

  const onToken = token => {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        console.debug('response =', response);
        console.debug('status =', response.data.success);
        //TODO give user a possibility to view recipe URL
        alert('Payment successful: ' + response.data.success);
      })
      .catch(error => {
        console.error('Payment error:', error);
        alert(
          'There was issue in the payment. Did you use the correct credit cart number?'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay now'
      token={onToken}
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
    />
  );
}

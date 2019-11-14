import React from 'react';
// import './StripeButton.scss';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeCheckoutButton({price}) {
  const publishableKey = 'pk_test_sDLdxDevqO92iJKzcODTf8lW';
  const priceForStripe = price * 100;

  const onToken = token => {
    console.debug('token =', token);
    alert('Payment Successful');
  }
  return (
    <StripeCheckout
      label='Pay now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
    />
  );
}
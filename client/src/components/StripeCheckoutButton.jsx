import React from 'react';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import CustomButton from './CustomButton';
import { createPurchaseDocument } from '../firebase/firebaseUtils';

export default function StripeCheckoutButton({ price, cartItems }) {
  const currentUser = useSelector(state => state.user.currentUser);
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

        const receipt = response.data.success.slice(
          response.data.success.search('https')
        );
        console.debug('receipt =', receipt);
        //TODO give user a possibility to view recipe URL
        createPurchaseDocument(currentUser.id, price, cartItems, receipt);
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
      style={{ color: 'red' }}
      label='Pay now'
      token={onToken}
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
    >
      <CustomButton disabled={cartItems.length === 0}>Pay Now</CustomButton>
    </StripeCheckout>
  );
}

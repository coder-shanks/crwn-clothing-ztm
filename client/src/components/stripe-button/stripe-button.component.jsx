import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IZKGpSHFxVv0MuOEPMrfVlw3iZGhA8MT1afJCwuLh8Fv8Sbc4KDksyMLmGTDDCQnpGhiD811iOm2Tf9jr2nGTu800uXafpgtn';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful!');
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert(
          'There was an issue with your payment. Please make sure to use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

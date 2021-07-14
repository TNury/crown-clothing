// STRIPE
import StripeCheckout from 'react-stripe-checkout';

export const StripeCheckoutButton = ({ cartTotalProp }) => {

  const priceForStripe = cartTotalProp * 100;
  const pubKey = 'pk_test_51JDDw8FcRQWdCUNX8vvnirOihRxh6yftU5OYL6ZAM4gR6BijUFs8uxXlZKqxw7aYqXMoJwAWIYaifWtylafwFb3Q00pZS0KQny';

  const onToken = token => {
    console.log(token);
    alert('Payment Sucessful');
  };

  return (
    <StripeCheckout 
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${cartTotalProp}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={pubKey}
    />
  )
};
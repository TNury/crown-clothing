// REDUX
import { connect } from 'react-redux';
import { cartItemsSelector, cartTotalSelector } from '../../../Redux/reducers/cart/selectors/cartSelectors.js';
// COMPONENTS
import CheckOutItem from './checkout-item/checkout-item.jsx';
import { StripeCheckoutButton } from './stripe-button/stripe-button.jsx';

const CheckoutPage = ({ reduxProps: { cartItemsProps, cartTotalProp } }) => {
  
  return (
    <div className="checkout-page">
      <span className="checkout-page__head">Product</span>
      <span className="checkout-page__head">Description</span>
      <span className="checkout-page__head">Quantity</span>
      <span className="checkout-page__head">Price</span>
      <span className="checkout-page__head">Remove</span>
      <div className="checkout-items-ctr">
        {cartItemsProps.map((cartItemProps) => (
          <CheckOutItem
            key={cartItemProps.id}
            drilledProps={{
              ...cartItemProps
            }}
          />
        ))}
      </div>
      <span className="checkout-page__total">TOTAL: ${cartTotalProp}</span>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV:123
      </div>
      <StripeCheckoutButton className="test" cartTotalProp={cartTotalProp} />
    </div>
  );
};

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    cartItemsProps: cartItemsSelector(currentStore),
    cartTotalProp: cartTotalSelector(currentStore)
  }
});

export default connect(mapStoreToProps)(CheckoutPage);
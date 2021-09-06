// REDUX
import { connect } from 'react-redux';
import { cartItemsSelector, cartTotalSelector } from '../../../Redux/reducers/cart/selectors/cartSelectors.js';
// COMPONENTS
import CheckOutItem from './checkout-item/checkout-item.jsx';
import { StripeCheckoutButton } from './stripe-button/stripe-button.jsx';
// STYLES
import { checkoutPageStyles } from './checkout-page.styles.js';
import { checkoutItemStyles } from './checkout-item/checkout-item.styles.js';

const CheckoutPage = ({ reduxProps: { cartItemsProps, cartTotalProp } }) => {
  
  const { 
    checkoutPage,
    checkoutPage__head,
    checkoutPage__total,
    stripeCheckout,
    test_warning 
  } = checkoutPageStyles();

  const { checkoutItemsCtr } = checkoutItemStyles();

  return (
    <div className={checkoutPage}>
      <span className={checkoutPage__head}>Product</span>
      <span className={checkoutPage__head}>Description</span>
      <span className={checkoutPage__head}>Quantity</span>
      <span className={checkoutPage__head}>Price</span>
      <span className={checkoutPage__head}>Remove</span>
      <div className={checkoutItemsCtr}>
        {cartItemsProps.map((cartItemProps) => (
          <CheckOutItem
            key={cartItemProps.id}
            drilledProps={{
              ...cartItemProps
            }}
          />
        ))}
      </div>
      <span className={checkoutPage__total}>TOTAL: ${cartTotalProp}</span>
      <div className={test_warning}>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV:123
      </div>
      <div className={stripeCheckout}>
        <StripeCheckoutButton className="test" cartTotalProp={cartTotalProp} />
      </div>
    </div>
  );
};

const mapStateToProps = (currentState) => ({
  reduxProps: {
    cartItemsProps: cartItemsSelector(currentState),
    cartTotalProp: cartTotalSelector(currentState)
  }
});

export default connect(mapStateToProps)(CheckoutPage);
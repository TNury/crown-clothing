// REDUX
import { connect } from 'react-redux';
import { cartItemsSelector, cartTotalSelector } from '../../../Redux/reducers/cart/selectors/cartSelectors.js';
// COMPONENTS
import CheckOutItem from './checkout-item/checkout-item.jsx';

const CheckoutPage = ({ reduxProps: { cartItemsProps, cartTotalProp }, dispatch }) => {
  
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
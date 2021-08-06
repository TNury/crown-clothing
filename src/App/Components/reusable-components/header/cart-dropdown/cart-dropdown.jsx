// REDUX
import { connect } from 'react-redux';
import { cartItemsSelector } from '../../../../Redux/reducers/cart/selectors/cartSelectors.js';
import { toggleDropdown } from '../../../../Redux/reducers/cart/actions/cartActions.js';
// REACT ROUTER
import { withRouter } from 'react-router';
// REUSABLE COMPONENTS
import { CartItem } from '../../cart-item/cart-item.jsx';
import { Button } from '../../button/button.jsx';

export const CartDropdown = ({ reduxProps, history, dispatch }) => {

  const { cartItemsProps } = reduxProps;
  
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItemsProps.length > 0
          ?
          cartItemsProps.map(({ id, ...restOfProps }) => (
            <CartItem
              key={id}
              drilledProps={{
                ...restOfProps
              }}
            />
          ))
          :
          <span className="empty-message">Your cart is empty.</span>
        }
      </div>
      <Button
        handler={() => {
          history.push('/checkout')
          dispatch(toggleDropdown());
        }}
        styles="_dropdown"
        type="button"
        text="GO TO CHECKOUT"
      />
    </div>
  );
};

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    cartItemsProps: cartItemsSelector(currentStore)
  }
});

export default withRouter(connect(mapStoreToProps)(CartDropdown));

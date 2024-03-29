// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { cartItemsSelector } from '../../../../Redux/reducers/cart/selectors/cartSelectors.js';
import { toggleDropdown } from '../../../../Redux/reducers/cart/actions/cartActions.js';
// REACT ROUTER
import { useHistory } from 'react-router';
// COMPONENTS
import CartItem from '../../cart-item/cart-item.jsx';
import { Button } from '../../button/button.jsx';
// STYLES
import { cartDropdownStyles } from './cart-dropdown.styles.js';

export const CartDropdown = () => {

  // HOOKS
  const cartItemsProps = useSelector(cartItemsSelector);

  const dispatch = useDispatch();

  const history = useHistory();

  const { 
    cartDropdown, 
    cartItems, 
    emptyMessage, 
    _dropDown 
  } = cartDropdownStyles();
  
  return (
    <div className={cartDropdown}>
      <div className={cartItems}>
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
          <span className={emptyMessage}>Your cart is empty.</span>
        }
      </div>
      <Button
        handler={() => {
          history.push('/checkout')
          dispatch(toggleDropdown());
        }}
        styles={_dropDown}
        type="button"
        text="GO TO CHECKOUT"
      />
    </div>
  );
};
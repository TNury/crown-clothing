// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { itemCountSelector } from '../../../../Redux/reducers/cart/selectors/cartSelectors.js';
import { toggleDropdown } from '../../../../Redux/reducers/cart/actions/cartActions.js';
// ICON
import { ReactComponent as ShoppingIcon } from '../../../../Assets/icons/shopping-bag.svg';
// STYLES
import { cartIconStyles } from './cart-icon.styles.js';

export const CartIcon = () => {

  // HOOKS
  const itemCountProp = useSelector(itemCountSelector);
  
  const dispatch = useDispatch();

  const { cartIcon, shoppingIcon, itemCount } = cartIconStyles();

  return (
    <div className={cartIcon} onClick={() => dispatch(toggleDropdown())}>
      <ShoppingIcon className={shoppingIcon} />
      <span className={itemCount}>{itemCountProp}</span>
    </div>
  );
};
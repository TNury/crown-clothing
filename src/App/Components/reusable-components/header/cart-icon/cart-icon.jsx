// REDUX
import { connect } from 'react-redux';
import { itemCountSelector } from '../../../../Redux/reducers/cart/selectors/cartSelectors.js';
import { toggleDropdown } from '../../../../Redux/reducers/cart/actions/cartActions.js';
// ICON
import { ReactComponent as ShoppingIcon } from '../../../../Assets/icons/shopping-bag.svg';
// STYLES
import { cartIconStyles } from './cart-icon.styles.js';

const CartIcon = ({ reduxProps, dispatch }) => {

  const { itemCountProp } = reduxProps;
  const { cartIcon, shoppingIcon, itemCount } = cartIconStyles();

  return (
    <div className={cartIcon} onClick={() => dispatch(toggleDropdown())}>
      <ShoppingIcon className={shoppingIcon} />
      <span className={itemCount}>{itemCountProp}</span>
    </div>
  );
};

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    itemCountProp: itemCountSelector(currentStore)
  }
});

export default connect(mapStoreToProps)(CartIcon);

// REDUX
import { connect } from 'react-redux';
import { itemCountSelector } from '../../../../Redux/reducers/cart/selectors/cartSelectors.js';
import { toggleDropdown } from '../../../../Redux/reducers/cart/actions/cartActions.js';
// ICON
import { ReactComponent as ShoppingIcon } from '../../../../Assets/icons/shopping-bag.svg';

const CartIcon = ({ reduxProps, dispatch }) => {

  const { itemCountProp } = reduxProps;

  return (
    <div onClick={() => dispatch(toggleDropdown())} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCountProp}</span>
    </div>
  );
};

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    itemCountProp: itemCountSelector(currentStore)
  }
});

export default connect(mapStoreToProps)(CartIcon);

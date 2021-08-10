// REDUX
import { connect } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../../../../Redux/reducers/cart/actions/cartActions.js';
// STYLES
import { checkoutItemStyles } from './checkout-item.styles.js';

const CheckOutItem = ({ drilledProps, reduxActions }) => {

  const { id, imageUrl, name, quantity, price } = drilledProps;
  const { addItem, removeItem, deleteItem } = reduxActions;
  const { 
    checkoutItem,
    checkoutItem__item,
    img_ctr,
    img,
    _text,
    group,
    group__text,
    group__arrow,
    _remove
  } = checkoutItemStyles();

  return (
    <div className={checkoutItem}>
      <div className={`${checkoutItem__item} ${img_ctr}`}>
        <img className={img} src={imageUrl} alt="item" />
      </div>
      <span className={`${checkoutItem__item} ${_text}`}>{name}</span>
      <div className={`${checkoutItem__item} ${group}`}>
        <span className={group__arrow} onClick={() => removeItem(drilledProps)}>
          &#10094;
        </span>
        <span className={group__text}>{quantity}</span>
        <span onClick={() => addItem(drilledProps)} className={group__arrow}>
          &#10095;
        </span>
      </div>
      <span className={`${checkoutItem__item} ${_text}`}>${price}</span>
      <div
        onClick={() => {
          deleteItem(id);
        }}
        className={`${checkoutItem__item} ${_text} ${_remove}`}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    deleteItem: (item) => dispatch(deleteItem(item))
  }
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
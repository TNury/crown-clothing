// REDUX
import { useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../../../../Redux/reducers/cart/actions/cartActions.js';
// STYLES
import { checkoutItemStyles } from './checkout-item.styles.js';

export const CheckOutItem = ({ drilledProps }) => {

  // HOOKS
  const dispatch = useDispatch();

  // STYLES
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

  const { id, imageUrl, name, quantity, price } = drilledProps;

  return (
    <div className={checkoutItem}>
      <div className={`${checkoutItem__item} ${img_ctr}`}>
        <img className={img} src={imageUrl} alt="item" />
      </div>
      <span className={`${checkoutItem__item} ${_text}`}>{name}</span>
      <div className={`${checkoutItem__item} ${group}`}>
        <span
          className={group__arrow}
          onClick={() => dispatch(removeItem(drilledProps))}
        >
          &#10094;
        </span>
        <span className={group__text}>{quantity}</span>
        <span
          onClick={() => dispatch(addItem(drilledProps))}
          className={group__arrow}
        >
          &#10095;
        </span>
      </div>
      <span className={`${checkoutItem__item} ${_text}`}>${price}</span>
      <div
        onClick={() => {
          dispatch(deleteItem(id));
        }}
        className={`${checkoutItem__item} ${_text} ${_remove}`}
      >
        &#10005;
      </div>
    </div>
  );
};
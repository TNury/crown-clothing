// STYLES
import { cartItemStyles } from './cart-item.styles.js';

export const CartItem = ({ drilledProps }) => {

  const { name, imageUrl, price, quantity } = drilledProps;
  const { cartItem, img, itemDetails, name: nameStyles, price: priceStyles } = cartItemStyles();
  
  return (
    <div className={cartItem}>
      <img className={img} src={imageUrl} alt="item" />
      <div className={itemDetails}>
        <span className={nameStyles}>{name} </span>
        <span className={priceStyles}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

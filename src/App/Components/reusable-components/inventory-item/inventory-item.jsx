// REDUX
import { connect } from 'react-redux';
import { addItem } from '../../../Redux/reducers/cart/actions/cartActions.js';
// REUSABLE COMPONENTS
import { Button } from '../button/button.jsx';
// STYLES
import { inventoryItemStyles } from './inventory-item.styles.js';

const InventoryItem = ({ drilledProps, dispatch }) => {

  const { name, price, imageUrl } = drilledProps;
  const {
    collectionItem,
    image: imageStyles,
    customButton,
    collectionFooter,
    name: nameStyles,
    price: priceStyles
  } = inventoryItemStyles();

  return (
    <div className={collectionItem}>
      <div
        className={imageStyles}
        style={{
          background: `url(${imageUrl})`
        }}
      />
      <div className={collectionFooter}>
        <span className={nameStyles}>{name}</span>
        <span className={priceStyles}>${price}</span>
      </div>
      <Button
        handler={() => dispatch(addItem(drilledProps))}
        styles={customButton}
        type="button"
        text="ADD TO CART"
      />
    </div>
  );
};

export default connect(null)(InventoryItem);

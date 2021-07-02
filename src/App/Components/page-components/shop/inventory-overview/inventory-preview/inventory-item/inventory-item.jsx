// REDUX
import { connect } from 'react-redux';
import { addItem } from '../../../../../../Redux/reducers/cart/actions/cartActions.js';
// REUSABLE COMPONENTS
import { Button } from '../../../../../reusable-components/button/button.jsx';

export const InventoryItem = ({ drilledProps, dispatch }) => {

  const { name, price, imageUrl } = drilledProps;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          background: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        handler={() => dispatch(addItem(drilledProps))}
        modifier="_inverted"
        type="button"
        text="ADD TO CART"
      />
    </div>
  );
};

export default connect(null)(InventoryItem);

// REDUX
import { connect } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../../../../Redux/reducers/cart/actions/cartActions.js';

const CheckOutItem = ({ drilledProps, reduxActions }) => {

  const { id, imageUrl, name, quantity, price } = drilledProps;
  const { addItem, removeItem, deleteItem } = reduxActions;

  return (
    <div className="checkout-item">
      <div className="checkout-item__item _img">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="checkout-item__item _text">{name}</span>
      <div className="checkout-item__item group">
        <span onClick={() => removeItem(drilledProps)} className="group__arrow">&#10094;</span>
        <span className="group__text">{quantity}</span>
        <span onClick={() => addItem(drilledProps)} className="group__arrow">&#10095;</span>
      </div>
      <span className="checkout-item__item _text">${price}</span>
      <div onClick={() => {
        deleteItem(id);
      }} 
      className="checkout-item__item _text _remove">&#10005;</div>
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
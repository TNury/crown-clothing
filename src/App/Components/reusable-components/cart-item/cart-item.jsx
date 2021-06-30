

export const CartItem = ({ drilledProps }) => {

  const { name, imageUrl, price, quantity } = drilledProps;
  
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name} </span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

// STYLES CREATOR FUNCTION
import { createUseStyles } from 'react-jss';

export const cartItemStyles = createUseStyles({
  cartItem: {
    width: '100%',
    display: 'flex',
    height: '75px',
    marginBottom: '15px'
  },
  img: {
    width: '30%'
  },
  itemDetails: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '10px 20px'
  },
  name: {
    fontSize: '16px'
  },
  price: {}
}); 
// JSS STYLES HOOK
import { createUseStyles } from 'react-jss';

export const cartIconStyles = createUseStyles({
  cartIcon: {
    width: '45px',
    height: '45px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  shoppingIcon: {
    widht: '24px',
    height: '24px'
  },
  itemCount: {
    position: 'absolute',
    fontSize: '10px',
    fontWeight: 'bold',
    bottom: '12px'
  }
});
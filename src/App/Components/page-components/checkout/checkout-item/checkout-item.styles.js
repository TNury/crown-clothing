// STYLES CREATOR FUNCTION
import { createUseStyles } from 'react-jss';

export const checkoutItemStyles = createUseStyles({
  checkoutItemsCtr: {
    gridColumn: '1 / 6'
  },
  checkoutItem: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    boxSizing: 'border-box',
    padding: '5px 0',
    borderBottom: '1px solid darkgrey',
    '&:first-child': {
      borderTop: '1px solid darkgrey'
    }
  },
  checkoutItem__item: {
    margin: '0 auto'
  },
  img_ctr: {
    height: '150px'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  _text: {
    marginTop: '4rem'
  },
  group: {
    display: 'flex',
    marginTop: '4rem'
  },
  group__text: {
    margin: '0 .3rem'
  },
  group__arrow: {
    cursor: 'pointer'
  },
  _remove: {
    cursor: 'pointer'
  }
});
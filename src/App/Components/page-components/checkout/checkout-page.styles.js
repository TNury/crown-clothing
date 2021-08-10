// STYLES CREATOR FUNCTION
import { createUseStyles } from 'react-jss';

export const checkoutPageStyles = createUseStyles({
  checkoutPage: {
    boxSizing: 'border-box',
    width: '100%',
    margin: '0 auto',
    // CSS GRID
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: '2rem auto 3rem',
  },
  checkoutPage__head: {
    margin: '0 auto',
    gridRow: '1 / -4'
  },
  checkoutPage__total: {
    fontSize: '36px',
    gridColumn: '1 / 5',
    gridRow: '3 / -2',
    marginLeft: 'auto'
  },
  stripeCheckout: {
    margin: '7px auto',
    gridColumn: '5 / 6',
    gridRow: '3 / -2',
    background: ['none', '!important'],
    border: ['none', '!important']
  },
  test_warning: {
    textAlign: 'center',
    gridColumn: '1 / 6',
    gridRow: '4 / -1',
    fontSize: '24px',
    color: 'red'
  }
});
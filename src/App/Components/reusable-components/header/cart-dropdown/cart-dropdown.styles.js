// STYLES CREATOR FUNCTION
import { createUseStyles } from 'react-jss';

export const cartDropdownStyles = createUseStyles({
  cartDropdown: {
    position: 'absolute',
    width: '240px',
    height: '340px',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    border: '1px solid black',
    backgroundColor: 'white',
    top: '90px',
    right: '40px',
    zIndex: '5'
  },
  cartItems: {
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
  },
  emptyMessage: {
    fontSize: '18px',
    margin: '40px'
  },
  _dropDown: {
    marginTop: 'auto'
  }
});
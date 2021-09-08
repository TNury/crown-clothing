// JSS HOOK
import { createUseStyles } from 'react-jss';

export const buttonStyles = createUseStyles({
  customButton: {
    minWidth: '165px',
    width: 'auto',
    height: '50px',
    letterSpacing: '0.5px',
    lineHeight: '50px',
    padding: '0 35px 0 35px',
    fontSize: '15px',
    fontFamily: 'OpenSansCondensed',
    backgroundColor: 'black',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    cursor: 'pointer',
    border: '1px solid black',
    margin: '-1px',
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    },
    // Change this so instead of defining this here,
    // we pass it as a prop
    '&._brand-g': {
      color: 'white',
      background: '#4286f4',

      '&:hover': {
        background: '#357ae8'
      }
    }
  }
});

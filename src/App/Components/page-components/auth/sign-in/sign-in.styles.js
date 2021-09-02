// JSS STYLES HOOK
import { createUseStyles } from 'react-jss';

export const signInPageStyles = createUseStyles({
  signIn: {
    width: '380px',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    margin: '10px 0'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});
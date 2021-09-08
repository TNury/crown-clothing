// JSS HOOK
import { createUseStyles } from 'react-jss';

export const appStyles = createUseStyles({
  '@global': {
    ':root': {
      fontSize: '16px'
    },
    '*': {
      boxSizing: 'border-box'
    },
    body: {
      fontFamily: 'OpenSansCondensed',
      padding: '1.5rem 3.5rem'
    },
    a: {
      textDecoration: 'none',
      color: 'black'
    }
  },
  app: {}
});
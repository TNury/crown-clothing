// STYLES CREATOR FUNCTION
import { createUseStyles } from 'react-jss';

export const headerStyles = createUseStyles({
  header: {
    height: '70px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '25px'
  },
  logoContainer: {
    width: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.7rem'
  },
  options: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  option: {
    cursor: 'pointer',
    padding: '10px 15px'
  }
});
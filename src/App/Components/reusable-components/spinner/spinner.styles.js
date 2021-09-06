// JSS STYLES HOOK
import { createUseStyles } from 'react-jss';

export const spinnerStyles = createUseStyles({
  spinnerOverlay: {
    height: '60vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinnerContainer: {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    border: '3px solid rgba(195, 195, 195, 0.6)',
    borderRadius: '50%',
    borderTopColor: '#636767',
    animation: '$spin 1s ease-in-out infinite',
  },
  '@keyframes spin': {
    to: {
      '-webkit-transform': 'rotate(360deg)'
    }
  }
});
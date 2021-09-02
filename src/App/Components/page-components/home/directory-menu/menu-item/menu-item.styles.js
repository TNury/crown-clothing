// JSS STYLES HOOK
import { createUseStyles } from 'react-jss';

export const menuItemStyles = createUseStyles({
  menuItem: {
    minWidth: '30%',
    height: (props) => props.size,
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    margin: '0 7.5px 15px',
    overflow: 'hidden',
    '&:first-child': {
      marginRight: '7.5px'
    },
    '&:last-child': {
      marginLeft: '2.5px'
    },
    '&:hover': {
      cursor: 'pointer'
    },
    '&:hover $backgroundImage': {
      transform: 'scale(1.1)',
      transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
    },
    '&:hover $content': {
      opacity: '0.9'
    }
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  content: {
    height: '90px',
    padding: '0 25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    backgroundColor: 'white',
    opacity: '0.7',
    position: 'absolute'
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: '0 6px 0',
    fontSize: '22px',
    color: '#4a4a4a'
  },
  subtitle: {
    fontWeight: 'lighter',
    fontSize: '16px'
  }
});
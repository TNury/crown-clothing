// JSS HOOK
import { createUseStyles } from 'react-jss';

export const inventoryItemStyles = createUseStyles({
  collectionItem: {
    width: '22vw',
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0',
    height: '350px',
    alignItems: 'center',
    position: 'relative',
    '&:hover $image': {
      opacity: '0.8'
    },
    '&:hover $customButton': {
      opacity: '0.85',
      display: 'flex'
    }
  },
  image: {
    width: '100%',
    height: '95%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '5px'
  },
  customButton: {
    width: '80%',
    opacity: '0.7',
    position: 'absolute',
    top: '255px',
    display: 'none',
    color: 'black',
    backgroundColor: 'white',

    '&:hover': {
      color: 'white',
      backgroundColor: 'black'
    }
  },
  collectionFooter: {
    width: '100%',
    height: '5%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px'
  },
  name: {
    width: '90%',
    marginBottom: '15px'
  },
  price: {
    width: '10%'
  }
});

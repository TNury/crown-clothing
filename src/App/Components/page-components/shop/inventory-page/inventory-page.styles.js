// JSS STYLES HOOK
import { createUseStyles } from 'react-jss';

export const inventoryPageStyles = createUseStyles({
  collectionPage: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontSize: '38px',
    margin: '0 auto 30px',
    textTransform: 'uppercase'
  },
  itemsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '10px'
  }
});
// STYLES CREATOR FUNCTION
import { createUseStyles } from 'react-jss';

export const collectionPreviewStyles = createUseStyles({
  collectionPreview: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px'
  },
  title: {
    fontSize: '28px',
    marginBottom: '25px',
    textTransform: 'uppercase'
  },
  preview: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

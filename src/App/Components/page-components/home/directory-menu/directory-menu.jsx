// REDUX
import { connect } from 'react-redux';
import { directorySectionSelector } from '../../../../Redux/reducers/directory/selectors/directorySelectors.js';
// COMPONENTS
import MenuItem from './menu-item/menu-item.jsx';
// STYLES
import { directoryMenuStyles } from './directory-menu.styles.js';

export const DirectoryMenu = ({ reduxProps: { directoryProps } }) => {

  const { directoryMenu } = directoryMenuStyles();

  return (
    <div className={directoryMenu}>
      {directoryProps.map(({ id, ...restOfProps }) => (
        <MenuItem key={id} {...restOfProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (currentState) => ({
  reduxProps: {
    directoryProps: directorySectionSelector(currentState)
  }
});

export default connect(mapStateToProps)(DirectoryMenu);

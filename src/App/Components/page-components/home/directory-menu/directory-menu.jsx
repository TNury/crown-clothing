// REDUX
import { useSelector } from 'react-redux';
import { directorySectionSelector } from '../../../../Redux/reducers/directory/selectors/directorySelectors.js';
// COMPONENTS
import { MenuItem } from './menu-item/menu-item.jsx';
// STYLES
import { directoryMenuStyles } from './directory-menu.styles.js';

export const DirectoryMenu = () => {

  // HOOKS
  const directoryProps = useSelector(directorySectionSelector);

  const { directoryMenu } = directoryMenuStyles();

  return (
    <div className={directoryMenu}>
      {directoryProps.map(({ id, ...restOfProps }) => (
        <MenuItem key={id} {...restOfProps} />
      ))}
    </div>
  );
};

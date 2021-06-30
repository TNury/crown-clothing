// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { directorySectionSelector } from '../../../../Redux/reducers/directory/selectors/directorySelectors.js';
// COMPONENTS
import MenuItem from './menu-item/menu-item.jsx';

export const DirectoryMenu = ({ reduxProps: { directoryProps } }) => {

  return (
    <div className="directory-menu">
      {directoryProps.map(({ id, ...restOfProps }) => (
        <MenuItem key={id} {...restOfProps} />
      ))}
    </div>
  );
};

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    directoryProps: directorySectionSelector(currentStore)
  }
});

export default connect(mapStoreToProps)(DirectoryMenu);

// COMPONENTS
import { DirectoryMenu } from './directory-menu/directory-menu.jsx';
// STYLES
import { homePageStyles } from './home.styles.js';


export const HomePage = () => {

  const { homepage } = homePageStyles();
	
  return (
    <div className={homepage}>
      <DirectoryMenu />
    </div> 
  );
};

// COMPONENTS
import { DirectoryMenu } from './directory-menu/directory-menu.jsx';
// STYLES
import { homePageStyles } from './home.styles.js';

const HomePage = () => {

  // HOOKS
  const { homepage } = homePageStyles();
	
  return (
    <div className={homepage}>
      <DirectoryMenu />
    </div> 
  );
};

export default HomePage;
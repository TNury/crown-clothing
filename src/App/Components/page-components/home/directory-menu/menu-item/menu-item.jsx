// REACT-ROUTER
import { withRouter } from 'react-router-dom';
// STYLES
import { menuItemStyles } from './menu-item.styles.js';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  
  const imageSize = size === '_large' ? '380px' : '240px';

  const { 
    menuItem, 
    backgroundImage, 
    content, 
    title: titleStyles, 
    subtitle 
  } = menuItemStyles({size: imageSize});

  return (
    <div
      className={menuItem}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className={backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={content}>
        <div className={titleStyles}>{title}</div>
        <span className={subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

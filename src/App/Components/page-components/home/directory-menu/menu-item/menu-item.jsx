// REACT-ROUTER
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, modifier, linkUrl, history, match }) => {
  
  return (
    <div
      className={`menu-item ${modifier ? modifier : '_default'}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

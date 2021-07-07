// REACT ROUTER
import { Route } from 'react-router-dom';
// COMPONENTS
import InventoryOverview from './inventory-overview/inventory-overview.jsx';
import InventoryPage from './inventory-page/inventory-page.jsx';

export const ShopPage = ({ match }) => {

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={InventoryOverview} />
      <Route path={`${match.path}/:categoryId`} component={InventoryPage} />
    </div>
  );
};


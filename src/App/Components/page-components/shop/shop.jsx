// REACT
import { useEffect } from 'react';
// REACT ROUTER
import { Route } from 'react-router-dom';
// REDUX
import { useDispatch } from 'react-redux';
import { fetchInventoryStart } from '../../../Redux/reducers/inventory/actions/inventoryActions.js';
// COMPONENTS
import { InventoryOverview } from './inventory-overview/inventory-overview.jsx';
import { InventoryPage } from './inventory-page/inventory-page.jsx';

const ShopPage = ({ match }) => {

  // HOOKS
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchInventoryStart());

  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={InventoryOverview} />
      <Route path={`${match.path}/:categoryId`} component={InventoryPage} />
    </div>
  );
};

export default ShopPage;
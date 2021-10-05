// REACT
import { useEffect, Suspense, lazy } from 'react';
// REACT ROUTER
import { Route } from 'react-router-dom';
// REDUX
import { useDispatch } from 'react-redux';
import { fetchInventoryStart } from '../../../Redux/reducers/inventory/actions/inventoryActions.js';
// COMPONENTS
import { Spinner } from '../../reusable-components/spinner/spinner.jsx';
// COMPONENTS WITH LAZY
const InventoryOverview = lazy(() => import('./inventory-overview/inventory-overview.jsx'));
const InventoryPage = lazy(() => import('./inventory-page/inventory-page.jsx'));

const ShopPage = ({ match }) => {

  // HOOKS
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchInventoryStart());

  }, [dispatch]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={InventoryOverview} />
        <Route path={`${match.path}/:categoryId`} component={InventoryPage} />
      </Suspense>
    </div>
  );
};

export default ShopPage;
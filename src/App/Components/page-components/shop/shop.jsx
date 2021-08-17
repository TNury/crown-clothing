// REACT
import React from 'react';
// REACT ROUTER
import { Route } from 'react-router-dom';
// REDUX
import { connect } from 'react-redux';
// REDUX ACTIONS
import { fetchInventoryStartAsync } from '../../../Redux/reducers/inventory/actions/inventoryActions.js';
// REDUX SELECTORS
import {
  isInventoryFetchingSelector,
  isInventoryLoadedSelector
} from '../../../Redux/reducers/inventory/selectors/inventorySelectors.js';
// HIGHER ORDER COMPONENTS
import { WithSpinner } from '../../reusable-components/with-spinner/withSpinner.jsx';
// COMPONENTS
import InventoryOverview from './inventory-overview/inventory-overview.jsx';
import InventoryPage from './inventory-page/inventory-page.jsx';

// COMPONENTS WITH LOADING SCREEN HOC
const InventoryOverviewWithSpinner = WithSpinner(InventoryOverview);
const InventoryPageWithSpinner = WithSpinner(InventoryPage);

class ShopPage extends React.Component {

  componentDidMount() {

    const { dispatch } = this.props;

    dispatch(fetchInventoryStartAsync());

  }

  render() {

    const {
      match,
      reduxProps: { isInventoryFetching, isInventoryLoadedSelector }
    } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) => { 
            return (
              <InventoryOverviewWithSpinner isLoading={isInventoryFetching} {...props} />
            );
          }}    
        />
        <Route 
          path={`${match.path}/:categoryId`} 
          render={(props) => {
            return (
              <InventoryPageWithSpinner
                isLoading={!isInventoryLoadedSelector}
                {...props}
              />
            );
          }}
        />
      </div>
    )
  }
};

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    isInventoryFetching: isInventoryFetchingSelector(currentStore),
    isInventoryLoadedSelector: isInventoryLoadedSelector(currentStore)
  }
});

export default connect(mapStoreToProps, null)(ShopPage);

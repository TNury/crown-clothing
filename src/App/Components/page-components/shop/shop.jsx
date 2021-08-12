// REACT
import React from 'react';
// REACT ROUTER
import { Route } from 'react-router-dom';
// REDUX
import { connect } from 'react-redux';
import { updateInventory } from '../../../Redux/reducers/inventory/actions/inventoryActions.js';
// FIREBASE
import {
  firestore,
  convertCollectionSnapshotToMap
} from '../../../Firebase/firebase.js';
// HIGHER ORDER COMPONENTS
import { WithSpinner } from '../../reusable-components/with-spinner/withSpinner.jsx';
// COMPONENTS
import InventoryOverview from './inventory-overview/inventory-overview.jsx';
import InventoryPage from './inventory-page/inventory-page.jsx';

// COMPONENTS WITH LOADING SCREEN HOC
const InventoryOverviewWithSpinner = WithSpinner(InventoryOverview);
const InventoryPageWithSpinner = WithSpinner(InventoryPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {

    const collectionRef = firestore.collection('inventory');
    const { dispatch } = this.props;

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {

      const inventoryMap = convertCollectionSnapshotToMap(snapshot);
      
      dispatch(updateInventory(inventoryMap));

      this.setState({ loading: false });

    });

  }

  render() {

    const { match } = this.props;
    const { loading: loadingStatus } = this.state;

    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) => { 
            return (
              <InventoryOverviewWithSpinner isLoading={loadingStatus} {...props} />
            );
          }}    
        />
        <Route 
          path={`${match.path}/:categoryId`} 
          render={(props) => {
            return (
              <InventoryPageWithSpinner isLoading={loadingStatus} {...props} />
            );
          }}
        />
      </div>
    )
  }
};

export default connect(null)(ShopPage);

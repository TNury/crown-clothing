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
// COMPONENTS
import InventoryOverview from './inventory-overview/inventory-overview.jsx';
import InventoryPage from './inventory-page/inventory-page.jsx';

class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {

    const collectionRef = firestore.collection('inventory');
    const { dispatch } = this.props;

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {

      const inventoryMap = convertCollectionSnapshotToMap(snapshot);
      
      dispatch(updateInventory(inventoryMap));

    });

  }

  render() {

    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={InventoryOverview} />
        <Route path={`${match.path}/:categoryId`} component={InventoryPage} />
      </div>
    )
  }
};

export default connect(null)(ShopPage);

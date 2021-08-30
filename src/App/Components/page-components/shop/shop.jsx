// REACT
import React from 'react';
// REACT ROUTER
import { Route } from 'react-router-dom';
// REDUX
import { connect } from 'react-redux';
import { fetchInventoryStart } from '../../../Redux/reducers/inventory/actions/inventoryActions.js';
// COMPONENTS
import { InventoryOverviewHOC } from './inventory-overview-hoc/inventory-overview-hoc.jsx';
import { InventoryPageHOC } from './inventory-page-hoc/inventory-page-hoc.jsx';

class ShopPage extends React.Component {

  componentDidMount() {

    const { dispatch } = this.props;

    dispatch(fetchInventoryStart());

  }

  render() {

    const { match} = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          component={InventoryOverviewHOC}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={InventoryPageHOC}
        />
      </div>
    );
  }
};

export default connect(null)(ShopPage);

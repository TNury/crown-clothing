// REACT
import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { inventoryItemSelector } from '../../../Redux/reducers/inventory/selectors/inventorySelectors.js';
// COMPONENTS
import { InventoryPreview } from './inventory-preview/inventory-preview.jsx';

const ShopPage = ({ reduxProps: { inventoryItemProps } }) => {

  return (
    <div className="shop-page">
      {inventoryItemProps.map(({ id, ...restOfProps }) => (
        <InventoryPreview key={id} {...restOfProps} />
      ))}
    </div>
  );
};

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    inventoryItemProps: inventoryItemSelector(currentStore)
  }
});

export default connect(mapStoreToProps)(ShopPage);

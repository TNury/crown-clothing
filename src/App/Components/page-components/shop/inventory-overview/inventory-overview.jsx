// REDUX
import { connect } from 'react-redux';
import { inventoryPreviewSelector } from '../../../../Redux/reducers/inventory/selectors/inventorySelectors.js';
// COMPONENTS
import { InventoryPreview } from './inventory-preview/inventory-preview.jsx';
// STYLES
import { collectionsOverviewStyles } from './inventory-overview.styles.js';

const InventoryOverview = ({ reduxProps: { inventoryItemProps } }) => {

  const { collectionsOverview } = collectionsOverviewStyles();

  return (
    <div className={collectionsOverview}>
      {inventoryItemProps.map(({ id, ...restOfProps }) => (
        <InventoryPreview key={id} {...restOfProps} />
      ))}
    </div>
  );
};

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    inventoryItemProps: inventoryPreviewSelector(currentStore)
  }
});

export default connect(mapStoreToProps)(InventoryOverview);
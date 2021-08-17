// REDUX
import { connect } from 'react-redux';
import { compose } from 'redux';
// REDUX SELECTORS
import { isInventoryFetchingSelector } from '../../../../Redux/reducers/inventory/selectors/inventorySelectors.js';
// HOCs
import { WithSpinner } from '../../../reusable-components/with-spinner/withSpinner.jsx';
// COMPONENTS
import InventoryOverview from './inventory-overview/inventory-overview.jsx';

const mapStoreToProps = (currentStore) => ({
  isLoading: isInventoryFetchingSelector(currentStore)
});

export const InventoryOverviewHOC = compose(
  connect(mapStoreToProps),
  WithSpinner
)(InventoryOverview);

// THIS IS EQUIVALENT TO THIS:
// export const InventoryOverviewContainer = connect(mapStoreToProps)(WithSpinner(InventoryOverview))


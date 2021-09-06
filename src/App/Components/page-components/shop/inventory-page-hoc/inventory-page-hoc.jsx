// REDUX
import { connect } from 'react-redux';
import { compose } from 'redux';
// REDUX SELECTORS
import { isInventoryLoadedSelector } from '../../../../Redux/reducers/inventory/selectors/inventorySelectors.js';
// HOCs
import { WithSpinner } from '../../../reusable-components/with-spinner/withSpinner.jsx';
// COMPONENTS
import InventoryPage from './inventory-page/inventory-page.jsx';

const mapStateToProps = (currentState) => ({
  isLoading: !isInventoryLoadedSelector(currentState)
});

export const InventoryPageHOC = compose(
  connect(mapStateToProps),
  WithSpinner
)(InventoryPage);

// THIS IS EQUIVALENT TO THIS:
// export const InventoryOverviewContainer = connect(mapStateToProps)(WithSpinner(InventoryOverview))

// REDUX
import { connect } from 'react-redux';
import { categorySelector } from '../../../../Redux/reducers/inventory/selectors/inventorySelectors.js';

// COMPONENTS
import { InventoryItem } from '../../../reusable-components/inventory-item/inventory-item.jsx';

const InventoryPage = ({ reduxProps: { categoryProps }, match }) => {

  console.log(categoryProps)
  
  return (
    <div className="collection-page">
      <h2>INVENTORY PAGE</h2>
    </div>
  );
};

const mapStoreToProps = (currentStore, ownProps) => ({
  reduxProps: {
    categoryProps: categorySelector(ownProps.match.params.categoryId)(currentStore)
  }
});

export default connect(mapStoreToProps)(InventoryPage);
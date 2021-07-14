// REDUX
import { connect } from 'react-redux';
import { categorySelector } from '../../../../Redux/reducers/inventory/selectors/inventorySelectors.js';

// COMPONENTS
import InventoryItem from '../../../reusable-components/inventory-item/inventory-item.jsx';

// This is technically the Category page
const InventoryPage = ({ reduxProps: { categoryProps } }) => {

  const { title: category, items } = categoryProps;

  return (
    <div className="collection-page">
      <h2 className="title">{category}</h2>
      <div className="items">
        {
          items.map((item) => (
            <InventoryItem key={item.id} drilledProps={item}/>
          ))
        }
      </div>
    </div>
  );
};

const mapStoreToProps = (currentStore, ownProps) => ({
  reduxProps: {
    categoryProps: categorySelector(ownProps.match.params.categoryId)(currentStore)
  }
});

export default connect(mapStoreToProps)(InventoryPage);
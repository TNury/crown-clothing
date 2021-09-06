// REDUX
import { connect } from 'react-redux';
import { categorySelector } from '../../../../../Redux/reducers/inventory/selectors/inventorySelectors.js';
// COMPONENTS
import InventoryItem from '../../../../reusable-components/inventory-item/inventory-item.jsx';
// STYLES
import { inventoryPageStyles } from './inventory-page.styles.js';

// This is technically the Category page
const InventoryPage = ({ reduxProps: { categoryProps } }) => {

  const { title: category, items } = categoryProps;
  const { collectionPage, title, itemsContainer } = inventoryPageStyles();

  return (
    <div className={collectionPage}>
      <h2 className={title}>{category}</h2>
      <div className={itemsContainer}>
        {items.map((item) => (
          <InventoryItem key={item.id} drilledProps={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (currentState, ownProps) => ({
  reduxProps: {
    categoryProps: categorySelector(ownProps.match.params.categoryId)(currentState)
  }
});

export default connect(mapStateToProps)(InventoryPage);
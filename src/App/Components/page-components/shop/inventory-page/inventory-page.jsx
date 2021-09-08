// REDUX
import { useSelector } from 'react-redux';
import { categorySelector } from '../../../../Redux/reducers/inventory/selectors/inventorySelectors.js';
import { isInventoryLoadedSelector } from '../../../../Redux/reducers/inventory/selectors/inventorySelectors.js';
// COMPONENTS
import { Spinner } from '../../../reusable-components/spinner/spinner.jsx';
import { InventoryItem } from '../../../reusable-components/inventory-item/inventory-item.jsx';
// STYLES
import { inventoryPageStyles } from './inventory-page.styles.js';

// This is technically the Category page
export const InventoryPage = ({ match }) => {

  // HOOKS
  const categoryProps = useSelector(categorySelector(match.params.categoryId));
  const { title: category, items } = categoryProps;

  const isLoading = !useSelector(isInventoryLoadedSelector);

  const { collectionPage, title, itemsContainer } = inventoryPageStyles();

  return (
    <div className={collectionPage}>
      {
        isLoading
        ?
        <Spinner />
        :
        <>
          <h2 className={title}>{category}</h2>
          <div className={itemsContainer}>
            {items.map((item) => (
              <InventoryItem key={item.id} drilledProps={item} />
            ))}
          </div>
        </>
      }
    </div>
  );
};
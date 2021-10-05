// REDUX
import { useSelector } from 'react-redux';
import { inventoryPreviewSelector } from '../../../../Redux/reducers/inventory/selectors/inventorySelectors.js';
import { isInventoryFetchingSelector } from '../../../../Redux/reducers/inventory/selectors/inventorySelectors.js';
// COMPONENTS
import { InventoryPreview } from './inventory-preview/inventory-preview.jsx';
import { Spinner } from '../../../reusable-components/spinner/spinner.jsx';
// STYLES
import { collectionsOverviewStyles } from './inventory-overview.styles.js';

const InventoryOverview = () => {

  // HOOKS
  const inventoryItemProps = useSelector(inventoryPreviewSelector);
  
  const isLoading = useSelector(isInventoryFetchingSelector);

  const { collectionsOverview } = collectionsOverviewStyles();

  return (
    <div className={collectionsOverview}>
      {
        isLoading
        ?
        <Spinner/>
        :
        inventoryItemProps.map(({ id, ...restOfProps }) => (
          <InventoryPreview key={id} {...restOfProps} />
        ))
      }
    </div>
  );
};

export default InventoryOverview;
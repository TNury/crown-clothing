// COMPONENTS
import { InventoryItem } from '../../../../reusable-components/inventory-item/inventory-item.jsx';
// STYLES
import { collectionPreviewStyles } from './inventory-preview.styles.js';

export const InventoryPreview = ({ title, items }) => {

  // HOOKS
  const { collectionPreview, title: titleHead, preview } = collectionPreviewStyles();
  
  return (
    <div className={collectionPreview}>
      <h1 className={titleHead}>{title}</h1>
      <div className={preview}>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <InventoryItem key={item.id} drilledProps={item} />
          ))}
      </div>
    </div>
  );
};

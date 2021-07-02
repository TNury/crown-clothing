// COMPONENTS
import InventoryItem from './inventory-item/inventory-item.jsx';

export const InventoryPreview = ({ title, items }) => {
  
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <InventoryItem key={item.id} drilledProps={item} />
          ))}
      </div>
    </div>
  );
};

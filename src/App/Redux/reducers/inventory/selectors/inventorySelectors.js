// RESELECT
import { createSelector } from 'reselect';
// LODASH MEMOIZER
import memoize from 'lodash.memoize';

// INVENTORY REDUCER SELECTOR
const inventorySelector = (currentStore) => currentStore.inventoryReducer;

// INVENTORY ITEMS SELECTOR
export const inventoryItemSelector = createSelector(
  inventorySelector,
  (inventoryReducer) => inventoryReducer.inventory
);

// INVENTORY PREVIEW SELECTOR
export const inventoryPreviewSelector = createSelector(
  inventoryItemSelector,
  (inventory) => inventory ? Object.keys(inventory).map((key) => inventory[key]) : []
);

// CATEGORY SELECTOR
export const categorySelector = memoize((categoryId) => (
  createSelector(
    inventoryItemSelector,
    (inventory) => inventory ? inventory[categoryId] : null
  )
));

// IS INVENTORY FETCHING SELECTOR
export const isInventoryFetchingSelector = createSelector(
  inventorySelector,
  (inventoryReducer) => inventoryReducer.isFecthing
);

// IS INVENTORY LOADED SELECTOR
export const isInventoryLoadedSelector = createSelector(
  inventoryItemSelector,
  (inventory) => !!inventory
);
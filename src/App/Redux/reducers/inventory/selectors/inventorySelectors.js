// RESELECT
import { createSelector } from 'reselect';
// LODASH MEMOIZER
import memoize from 'lodash.memoize';

// INVENTORY ID MAP
const INVENTORY_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

// INVENTORY REDUCER SELECTOR
const inventorySelector = (currentStore) => currentStore.inventoryReducer;

// INVENTORY ITEMS SELECTOR
export const inventoryItemSelector = createSelector(
  inventorySelector,
  (inventoryReducer) => inventoryReducer.inventory
);

// CATEGORY SELECTOR
export const categorySelector = memoize((categoryId) => (
  createSelector(
    inventoryItemSelector,
    (inventory) => inventory.find(categories => categories.id === INVENTORY_ID_MAP[categoryId])
  )
));

import { SHOP_INVENTORY } from './inventory.js';

const INITIAL_STORE = {
  inventory: SHOP_INVENTORY
};

export const inventory = (currentStore = INITIAL_STORE, action) => {
  switch (action.type) {
    default:
      return currentStore;
  }
};

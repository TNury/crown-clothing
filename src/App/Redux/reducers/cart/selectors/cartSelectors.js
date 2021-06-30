// RESELECT 
import { createSelector } from 'reselect';

// CART REDUCER SELECTOR
const cartSelector = (currentStore) => currentStore.cartReducer;

// CART ITEMS SELECTOR
export const cartItemsSelector = createSelector(
  cartSelector,
  (cartReducer) => cartReducer.cartItems
);

// CART DROPDOWN SELECTOR
export const displayDropdownSelector = createSelector(
  cartSelector,
  (cartReducer) => cartReducer.displayDropdown
);

// CART ITEM COUNT SELECTOR
export const itemCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((cartItemsQuantity, cartItemsProps) => (
    cartItemsQuantity + cartItemsProps.quantity
  ), 0)
);

// CART TOTAL
export const cartTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((cartItemsQuantity, cartItemsProp) => (
    cartItemsQuantity + cartItemsProp.quantity * cartItemsProp.price
  ), 0)
);
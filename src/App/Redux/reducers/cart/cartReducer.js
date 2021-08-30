// ACTIONS TYPES
import {
  TOGGLE_DROPDOWN, ADD_ITEM,
  REMOVE_ITEM, DELETE_ITEM,
  CLEAR_CART
} from '../../actions-types/actionTypes.js';
// UTILITY FUNCTIONS
import { addItemToCart, removeItemFromCart } from './utility/cartUtils.js';

const INITIAL_STORE = {
  displayDropdown: false,
  cartItems: []
};

// REMINDER: EXPLORE MORE UTILITY FUNCTIONS

export const cart = (currentStore = INITIAL_STORE, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      return {
        ...currentStore,
        displayDropdown: !currentStore.displayDropdown
      };
    case ADD_ITEM:
      return {
        ...currentStore,
        cartItems: addItemToCart(currentStore.cartItems, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...currentStore,
        cartItems: removeItemFromCart(currentStore.cartItems, action.payload)
      };
    case DELETE_ITEM:
      return {
        ...currentStore,
        cartItems: currentStore.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        )
      };
    case CLEAR_CART:
      return {
        ...currentStore,
        cartItems: []
      };
    default:
      return currentStore;
  }
};

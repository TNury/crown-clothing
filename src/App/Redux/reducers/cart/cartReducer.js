// ACTIONS TYPES
import {
  TOGGLE_DROPDOWN, ADD_ITEM,
  REMOVE_ITEM, DELETE_ITEM,
  CLEAR_CART
} from '../../actions-types/actionTypes.js';
// UTILITY FUNCTIONS
import { addItemToCart, removeItemFromCart } from './utility/cartUtils.js';

const INITIAL_STATE = {
  displayDropdown: false,
  cartItems: []
};

// REMINDER: EXPLORE MORE UTILITY FUNCTIONS

export const cart = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      return {
        ...currentState,
        displayDropdown: !currentState.displayDropdown
      };
    case ADD_ITEM:
      return {
        ...currentState,
        cartItems: addItemToCart(currentState.cartItems, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...currentState,
        cartItems: removeItemFromCart(currentState.cartItems, action.payload)
      };
    case DELETE_ITEM:
      return {
        ...currentState,
        cartItems: currentState.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        )
      };
    case CLEAR_CART:
      return {
        ...currentState,
        cartItems: []
      };
    default:
      return currentState;
  }
};

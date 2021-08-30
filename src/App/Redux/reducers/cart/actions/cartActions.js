// ACTION VARIABLES
import { 
  TOGGLE_DROPDOWN, ADD_ITEM, 
  REMOVE_ITEM, DELETE_ITEM, 
  CLEAR_CART 
} from '../../../actions-types/actionTypes.js';

export const toggleDropdown = () => ({
  type: TOGGLE_DROPDOWN
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item
})

export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CLEAR_CART
});
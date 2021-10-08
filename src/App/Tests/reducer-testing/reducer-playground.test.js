// ENZYME
import '../setupTests.js';
import { shallow } from 'enzyme';
// ACTION TYPES
import {
  TOGGLE_DROPDOWN, ADD_ITEM,
  REMOVE_ITEM, DELETE_ITEM,
  CLEAR_CART
} from '../../Redux/actions-types/actionTypes.js'; 
// REDUCERS
import { cart } from '../../Redux/reducers/cart/cartReducer.js';


describe('inventory reducer', () => {

  
  it('should add an item to the cart', () => {

    const mockAddItem = {
      type: ADD_ITEM,
      payload: {}
    };

    expect(
      cart(undefined, mockAddItem)
    ).toEqual({
      displayDropdown: false,
      cartItems: [{
        quantity: 1
      }]
    });
    
  });

});
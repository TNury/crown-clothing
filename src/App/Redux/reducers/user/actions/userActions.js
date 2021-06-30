// ACTION VARIABLES
import { SET_CURRENT_USER } from '../../../actions-types/actionTypes.js';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
});

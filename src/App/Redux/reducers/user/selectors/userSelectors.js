import { createSelector } from 'reselect';

const userSelector = (currentState) => currentState.userReducer;

export const currentUserSelector = createSelector(
  userSelector,
  (userReducer) => userReducer.user
);



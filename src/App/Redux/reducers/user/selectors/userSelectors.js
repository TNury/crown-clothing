import { createSelector } from 'reselect';

const userSelector = (currentStore) => currentStore.userReducer;

export const currentUserSelector = createSelector(
  userSelector,
  (userReducer) => userReducer.user
);



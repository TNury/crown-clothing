// RESELECT
import { createSelector } from 'reselect';

// DIRECTORY REDUCER SELECTOR
const directorySelector = (currentStore) => currentStore.directoryReducer;

// DIRECTORY SECTIONS SELECTOR
export const directorySectionSelector = createSelector(
  directorySelector,
  (directoryReducer) => directoryReducer.sections
);

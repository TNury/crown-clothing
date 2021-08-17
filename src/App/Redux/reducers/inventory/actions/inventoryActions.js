// FIREBASE
import { firestore, convertCollectionSnapshotToMap } from '../../../../Firebase/firebase.js';
// ACTION VARIABLES
import {
  FETCH_INVENTORY_START,
  FETCH_INVENTORY_SUCCESS,
  FETCH_INVENTORY_FAILURE
} from '../../../actions-types/actionTypes.js';

export const fetchInventoryStart = () => ({
  type: FETCH_INVENTORY_START
});

export const fetchInventorySuccess = (inventoryMap) => ({
  type: FETCH_INVENTORY_SUCCESS,
  payload: inventoryMap
});

export const fetchInventorFailure = (errorMessage) => ({
  type: FETCH_INVENTORY_FAILURE,
  payload: errorMessage
});

export const fetchInventoryStartAsync = () => {

  return (dispatch) => {

    const collectionRef = firestore.collection('inventory');

    dispatch(fetchInventoryStart());

    collectionRef.get().then((snapshot) => {

      const inventoryMap = convertCollectionSnapshotToMap(snapshot);

      dispatch(fetchInventorySuccess(inventoryMap));

    }).catch((error) => {
      
      dispatch(fetchInventorFailure(error.message));

    });

  };
};


// FIREBASE
import { firestore, convertCollectionSnapshotToMap } from '../../../../Firebase/firebase.js';
// REDUX ACTION VARIABLES
import {
  FETCH_INVENTORY_START,
} from '../../../actions-types/actionTypes.js';
// REDUX ACTIONS
import { fetchInventorySuccess, fetchInventorFailure } from '../actions/inventoryActions.js';
// SAGA EFFECTS
import { takeLatest, call, put } from 'redux-saga/effects';

/*
  1. takeLatest = listens all instances of an action and does something
  with the latest returned value of that action;
  2. call = ??;
  3. put = basically what dispatch is in redux, put is in saga.
*/ 

export function* fetchInventoryAsync() {

  try {

    const collectionRef = firestore.collection('inventory');
    const snapshot = yield collectionRef.get();
    const inventoryMap = yield call(convertCollectionSnapshotToMap, snapshot);

    yield put(fetchInventorySuccess(inventoryMap));

  } catch (error) {
    
    yield put(fetchInventorFailure(error.message));
    
  }

}

// ACTION TRIGGER FUNCTION
export function* fetchInventoryStart() {
  yield takeLatest(FETCH_INVENTORY_START, fetchInventoryAsync);
}

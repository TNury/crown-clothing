// FIREBASE UTILITY LIBRARY
import firebase from 'firebase/app';
// FIREBASE AUTH
import 'firebase/firebase-auth';
// FIREBASE FIRESTORE (DATABASE);
import 'firebase/firebase-firestore';

// FIREBASE SDK
const firebaseConfig = {
  apiKey: 'AIzaSyBUE5b6FPtNMXn3NLqv8AoUMCt7Ww_RcR4',
  authDomain: 'crown-clothing-542d5.firebaseapp.com',
  projectId: 'crown-clothing-542d5',
  storageBucket: 'crown-clothing-542d5.appspot.com',
  messagingSenderId: '892436515973',
  appId: '1:892436515973:web:56a5759aff08d41edcedec',
};

// FIREBASE INIT
firebase.initializeApp(firebaseConfig);

// LIBRARY VARIABLES
const auth = firebase.auth();
const firestore = firebase.firestore();

// CREATE USER FUNCTION
async function createUserProfileDocument(user, additionalData) {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error created user', error.message);
    }
  }

  return userRef;
};

// FUNCTION TO AUTOMATICALLY ADD AND/OR UPDATE INVENTORY TO FIREBASE FIRESTORE
const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);

  });

  return await batch.commit();

};

// FUNCTION TO CONVERT COLLECTION SNAPSHOT INTO A MAPPED ARRAY
const convertCollectionSnapshotToMap = (collection) => {
  
  const transformedCollection = collection.docs.map((doc) => {
    
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }

  });

  return transformedCollection.reduce((accumulator, collection) => {

    accumulator[collection.title.toLowerCase()] = collection;

    return accumulator
  }, {});

};

// SIGN IN WITH GOOGLE SETUP
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// POPUPS
const signInWithGoogle = () => auth.signInWithPopup(provider);

export {
  auth,
  firestore,
  signInWithGoogle,
  createUserProfileDocument,
  addCollectionAndDocuments,
  convertCollectionSnapshotToMap
};

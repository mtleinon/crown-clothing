import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD8_DnN4yt14JtUfv7bRZWv2ajYXf2-gTU",
  authDomain: "crown-db-591dd.firebaseapp.com",
  databaseURL: "https://crown-db-591dd.firebaseio.com",
  projectId: "crown-db-591dd",
  storageBucket: "crown-db-591dd.appspot.com",
  messagingSenderId: "526060578228",
  appId: "1:526060578228:web:1ea0117028836d95d37ee1",
  measurementId: "G-BPERR0MXS1"
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  try {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      console.debug('User created =', displayName);
    } else {
      console.debug('User existed in db');
    }
    return userRef;
  } catch (error) {
    console.error('Error creating user =', error);
  }
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.debug('collectionRef =', collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  console.debug('transformedCollection =', transformedCollection);
  const reducedCollection = transformedCollection.reduce(
    (acc, collection) => {
      acc[collection.title.toLowerCase()] = collection;
      return acc;
    },
    {}
  );
  console.debug('reducedCollection =', reducedCollection);
  return reducedCollection;
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


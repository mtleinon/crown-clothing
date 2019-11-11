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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


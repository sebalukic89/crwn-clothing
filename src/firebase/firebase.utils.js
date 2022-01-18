import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyA2SaFudEvEOdImviptw5L7aRObv1ja1Mg',
  authDomain: 'crwn-db-bf4e9.firebaseapp.com',
  projectId: 'crwn-db-bf4e9',
  storageBucket: 'crwn-db-bf4e9.appspot.com',
  messagingSenderId: '637564973987',
  appId: '1:637564973987:web:728099e1791f0bcaa9e016',
  measurementId: 'G-90W5P36C57',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestor = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

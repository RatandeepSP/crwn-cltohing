import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBa9BI_wM_wUjM2Acq6aTmH2YhWYbmF74Q",
    authDomain: "crwn-db-df93f.firebaseapp.com",
    projectId: "crwn-db-df93f",
    storageBucket: "crwn-db-df93f.appspot.com",
    messagingSenderId: "415235993936",
    appId: "1:415235993936:web:aa1544b26c067b52a47c55",
    measurementId: "G-D6PXYFE0XR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

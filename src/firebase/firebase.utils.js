import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC6H_5mFTIUgFFkqYKAG2yWJ8pp1HvzBXU',
  authDomain: 'crwn-ztm-db.firebaseapp.com',
  projectId: 'crwn-ztm-db',
  storageBucket: 'crwn-ztm-db.appspot.com',
  messagingSenderId: '448893563411',
  appId: '1:448893563411:web:8af07cdecd858f6af305e6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

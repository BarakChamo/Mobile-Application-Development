import firebase from 'firebase'
import '@firebase/firestore'
import superSecretKeys from './credentials'

import fluxStore from './store'

// initialize firebase with loaded configuration
firebase.initializeApp(superSecretKeys);
  
// instance a firebase Firestore connection
const firestore = firebase.firestore()

export { firestore as firestore }

// Instance a firebase auth session
const auth = firebase.auth()

export { auth as auth }

// To sign up
// auth.createUserWithEmailAndPassword()

// To sign in
// auth.signInWithEmailAndPassword()

auth.onAuthStateChanged((user) => {
    fluxStore.dispatch('AUTH', user)

    console.log('USER', user)
    // auth.signOut()
//     if (user) {
//       // User is signed in.
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       // ...
//     } else {
//       // User is signed out.
//       // ...
//     }
  })
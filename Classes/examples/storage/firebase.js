import firebase from 'firebase'
import '@firebase/firestore'
import superSecretKeys from './credentials'

// initialize firebase with loaded configuration
firebase.initializeApp(superSecretKeys);
  
// instance a firebase Firestore connection
const store = firebase.firestore()

export { store as firestore }
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB7dJrBWHqgueyeQ1po5GO4dixL82nD0_k",
  authDomain: "crwn-clothing1.firebaseapp.com",
  databaseURL: "https://crwn-clothing1.firebaseio.com",
  projectId: "crwn-clothing1",
  storageBucket: "crwn-clothing1.appspot.com",
  messagingSenderId: "189806258393",
  appId: "1:189806258393:web:745307b6d477d750cdb6c8",
  measurementId: "G-5XK9700GE9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google OAuth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

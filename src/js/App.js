// ? FIREBASE
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAGXZbWML8bWjttNCUnObueuTtUF9wDDD0',
  authDomain: 'listing-website-22ca8.firebaseapp.com',
  projectId: 'listing-website-22ca8',
  storageBucket: 'listing-website-22ca8.appspot.com',
  messagingSenderId: '371453686013',
  appId: '1:371453686013:web:b20a45cbd3e406d61f4e94',
  measurementId: 'G-CK9VY74N7Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

const AuthController = (() => {})();
const ItemsController = (() => {})();
const UIController = (() => {})();
const AppController = ((AuthController, ItemsController, UIController) => {
  console.log(AuthController);
})(AuthController, ItemsController, UIController);

// ? FIREBASE
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
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

const AuthController = (() => {
  return {
    getUser: () => {
      onAuthStateChanged(auth, (user) => {
        console.log(user);
      });
    },
    signUserUp: (email, password) => {
      createUserWithEmailAndPassword(auth, email, password).then((user) =>
        console.log(user)
      );
    },
  };
})();

const ItemsController = (() => {})();
const UIController = (() => {
  const DOMItems = {
    signupButton: '.signup-button',
    loginButton: '.login-button',
    signupName: '.signup-name',
    signupEmail: '.signup-email',
    signupPassword: '.signup-password',
    signupBio: '.signup-bio',
  };

  return {
    DOMItems,
  };
})();

const App = ((AuthController, ItemsController, UIController) => {
  return {
    start: () => {
      const signupButton = document.querySelector(
        UIController.DOMItems.signupButton
      );
      signupButton.addEventListener('click', (e) => {
        const userName = document.querySelector(
          UIController.DOMItems.signupName
        ).value;
        const userEmail = document.querySelector(
          UIController.DOMItems.signupEmail
        ).value;
        const userPassword = document.querySelector(
          UIController.DOMItems.signupPassword
        ).value;
        const userBio = document.querySelector(
          UIController.DOMItems.signupBio
        ).value;
        if (
          userName !== '' &&
          userEmail !== '' &&
          userPassword !== '' &&
          userBio !== ''
        ) {
          AuthController.signUserUp(userEmail, userPassword);
        }
      });
    },
  };
})(AuthController, ItemsController, UIController);

App.start();

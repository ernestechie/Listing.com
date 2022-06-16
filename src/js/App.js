// ? FIREBASE
import { initializeApp } from 'firebase/app';
import { setDoc, getDocs, getDoc } from 'firebase/firestore';
import { getFirestore, collection, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAGXZbWML8bWjttNCUnObueuTtUF9wDDD0',
  authDomain: 'listing-website-22ca8.firebaseapp.com',
  projectId: 'listing-website-22ca8',
  storageBucket: 'listing-website-22ca8.appspot.com',
  messagingSenderId: '371453686013',
  appId: '1:371453686013:web:b20a45cbd3e406d61f4e94',
  measurementId: 'G-CK9VY74N7Z',
};

// ? Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ? Initialize Firebase Authentication
const auth = getAuth(app);

// ? DOM ITEMS
const DOMItems = {
  signupButton: '.signup-button',
  loginButton: '.login-button',
  logoutButton: '.logout-button',
  signupName: '.signup-name',
  signupUsername: '.signup-username',
  signupEmail: '.signup-email',
  signupPassword: '.signup-password',
  signupBio: '.signup-bio',
  loginEmail: '.login-email',
  loginPassword: '.login-pwd',
  landingPage: '#landing-page',
  mainApp: '#main',
  home: '#home',
  favourites: '#favourites',
  saved: '#saved',
  profile: '#profile',
  modal: '.modal',
  modalContent: '.modal-content',
  modalConfirm: 'logout-confirm',
  modalCancel: 'logout-cancel',
};

// ? Reacting to auth state changes of users
onAuthStateChanged(auth, (user) => {
  console.log(user);
  const landingPage = document.querySelector(DOMItems.landingPage);
  const mainApp = document.querySelector(DOMItems.mainApp);
  const profilePage = document.querySelector(DOMItems.profile);
  if (user !== null) {
    document.querySelector(DOMItems.home).style.zIndex = '5';
    landingPage.style.display = 'none';
    mainApp.style.display = 'block';

    getDoc(doc(collection(db, 'userInfo'), user.uid)).then((doc) => {
      profilePage.innerHTML = `
        <p class="page-name">Profile</p>
        <div class="user">
          <div class="user-image" style="background: url('${
            doc.data().profilePic
          }'); background-repeat: no-repeat; background-size: cover;background-position: center center;"></div>
          <div class="user-about">
            <h2 class="user-name">${doc.data().name}</h2>
            <p class="user-bio">${doc.data().bio}</p>
          </div>
          <div class="user-info">
            <div class="input-group">
              <p>Email:</p>
              <input
              type="text"
              value="${user.email}"
              disabled/>
          </div>
            <div class="input-group">
              <p>Username:</p>
              <input
              type="text"
              value="${doc.data().username}"
              disabled/>
          </div>
            <div class="input-group">
              <button class="button button-primary logout-button">LOGOUT <ion-icon name="log-out-sharp"></ion-icon></button>
              <p class="date-joined">
                JOINED: <b class='day'>5</b>-<b class='month'>6</b>-<b class='year'>2022</b>
              </p>
          </div>
        </div>
        `;
    });
    profilePage.style.display = 'block';
  } else {
    mainApp.style.display = 'none';
    landingPage.style.display = 'block';
    profilePage.innerHTML = '';
    profilePage.style.display = 'none';
  }
});

// ? SIGNUP FUNCTION
const signupButton = document.querySelector(DOMItems.signupButton);
signupButton.addEventListener('click', (e) => {
  const name = document.querySelector(DOMItems.signupName).value;
  const username = document.querySelector(DOMItems.signupUsername).value;
  const email = document.querySelector(DOMItems.signupEmail).value;
  const password = document.querySelector(DOMItems.signupPassword).value;
  const bio = document.querySelector(DOMItems.signupBio).value;

  if (name !== '' && email !== '' && password !== '' && bio !== '') {
    // ? Create user with email and password if login values are valid
    createUserWithEmailAndPassword(auth, email, password).then((credential) => {
      // ? Create a Firebase collection of user information
      return setDoc(doc(collection(db, 'userInfo'), credential.user.uid), {
        name: name,
        username: username,
        email: email,
        bio: bio,
        profilePic: 'https://i.pravatar.cc',
      })
        .then(() => {
          // ? Close signup form
          signupPage.classList.add('slide-out-right');
          signupPage.classList.remove('slide-in-right');
        })
        .catch((error) => console.log(error));
    });
  }
  e.preventDefault();
});

// ? LOGIN FUNCTION
const loginButton = document.querySelector(DOMItems.loginButton);
loginButton.addEventListener('click', (e) => {
  const email = document.querySelector(DOMItems.loginEmail).value;
  const password = document.querySelector(DOMItems.loginPassword).value;
  if (email !== '' && password !== '') {
    // ? Login user with email and password if login values are valid
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      // CLOSE LOGIN FORM
      loginPage.classList.add('slide-out-left');
      loginPage.classList.remove('slide-in-left');
    });
  }
  e.preventDefault();
});

// ? LOGOUT FUNCTION
const logoutButton = document.querySelector(DOMItems.logoutButton);
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('logout-button')) {
    const modal = document.querySelector(DOMItems.modal);
    const modalContent = document.querySelector(DOMItems.modalContent);
    modal.classList.add('modal-active');
    modalContent.classList.add('modal-content-active');

    window.addEventListener('click', (e) => {
      console.log(e.target.classList);
      if (
        e.target.classList.contains('modal') ||
        e.target.classList.contains('logout-cancel')
      ) {
        modal.classList.remove('modal-active');
        modalContent.classList.remove('modal-content-active');
      } else if (e.target.classList.contains('logout-confirm')) {
        signOut(auth).then(() => {
          console.log('Logged out');
          modal.classList.remove('modal-active');
          modalContent.classList.remove('modal-content-active');
        });
      }
    });
  }
});

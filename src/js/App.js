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
  modalConfirm: '.logout-confirm',
  modalCancel: '.logout-cancel',
  listingsContainer: '.listings-container',
  userName: '.user-name',
  userAvatar: '.profile-pic',
  favouritesContainer: '.favourites-container',
};

// ? Reacting to auth state changes of users
onAuthStateChanged(auth, (user) => {
  // ? CLEAR LOADING INDICATORS FROM DOM
  document.querySelector('.login-indicator').style.opacity = '0';
  document.querySelector('.signup-indicator').style.opacity = '0';

  const landingPage = document.querySelector(DOMItems.landingPage);
  const mainApp = document.querySelector(DOMItems.mainApp);
  const listingsContainer = document.querySelector(DOMItems.listingsContainer);
  const favouritesContainer = document.querySelector(
    DOMItems.favouritesContainer
  );
  const profilePage = document.querySelector(DOMItems.profile);
  const username = document.querySelector(DOMItems.userName);
  if (user !== null) {
    document.querySelector(DOMItems.home).style.zIndex = '5';
    landingPage.style.display = 'none';
    mainApp.style.display = 'block';

    getDoc(doc(collection(db, 'userInfo'), user.uid)).then((doc) => {
      username.innerHTML = `${doc.data().name}`;
      document.querySelectorAll('.profile-pic').forEach((pic) => {
        pic.style.background = `url('${
          doc.data().profilePic
        }') no-repeat center center/cover`;
      });

      listingsContainer.innerHTML += `
        <div class="listing">
          <ion-icon name="heart"></ion-icon>
          <ion-icon name="add-circle-outline"></ion-icon>
          <div
            class="listing-image"
            style="
              background: url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center center;
            ">
          </div>
          <div class="listing-content">
            <p class="bold title">Aridolf Wellness & Spa</p>
            <div class="body">
              <p class="description info">
                <ion-icon name="information-circle"></ion-icon>
                <span class="beds">2 </span> bed
                <span class="type">Hostel with team space</span>
              </p>
              <p class="info">
                <ion-icon name="location-sharp"></ion-icon>
                <span class="address"> Okaka Estate, Bayelsa State </span>
              </p>
              <p class="max-guests info">
                <ion-icon name="people"></ion-icon>
                <span class="guest-number">3 </span>
                Guests Max
              </p>
              <p class="price-range bold">
                <ion-icon name="wallet"></ion-icon>
                N<span class="min-price">150</span>K - N<span
                  class="max-price"
                  >250</span>K/MONTH
              </p>
            </div>
          </div>
      `;
      // ? FAVOURITES CONTAINER
      favouritesContainer.innerHTML += `
        <div class="listing">
            <ion-icon name="heart"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <div
              class="listing-image"
              style="
                background: url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
              "
            ></div>
            <div class="listing-content">
              <p class="bold title">Aridolf Wellness & Spa</p>
              <div class="body">
                <div class="description">
                  <p class="size info">
                    <ion-icon name="information-circle"></ion-icon>
                    <span class="beds">2 </span> bed
                  </p>
                  <p class="guests info">
                    <ion-icon name="people"></ion-icon>
                    <span class="guest-number">3 </span>
                    Guests Max
                  </p>
                </div>
                <p class="price-range bold">
                  <ion-icon name="wallet"></ion-icon>
                  N<span class="min-price">150</span>K - N<span
                    class="max-price"
                    >250</span
                  >K/MONTH
                </p>
              </div>
            </div>
          </div>
        </div>
      `;

      // ? PROFILE PAGE
      const profileImage = document.querySelector('#profile .user-image');
      const profileName = document.querySelector('.user-about .user-name');
      const profileBio = document.querySelector('.user-about .user-bio');
      const profileEmail = document.querySelector(
        '.user-info .input-group:nth-child(1) input'
      );
      const profileUsername = document.querySelector(
        '.user-info .input-group:nth-child(2) input'
      );
      profileImage.style.background = `url('${
        doc.data().profilePic
      }') no-repeat center center/cover`;
      profileName.innerHTML = `${doc.data().name}`;
      profileBio.innerHTML = `${doc.data().bio}`;

      profileEmail.setAttribute('value', `${user.email}`);
      profileUsername.setAttribute('value', `${doc.data().username}`);
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
  document.querySelector('.signup-indicator').style.opacity = '1';
  const name = document.querySelector(DOMItems.signupName).value;
  const username = document.querySelector(DOMItems.signupUsername).value;
  const email = document.querySelector(DOMItems.signupEmail).value;
  const password = document.querySelector(DOMItems.signupPassword).value;
  const bio = document.querySelector(DOMItems.signupBio).value;

  if (name !== '' && email !== '' && password !== '' && bio !== '') {
    // ? Create user with email and password if login values are valid
    createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        // ? Create a Firebase collection of user information
        return setDoc(doc(collection(db, 'userInfo'), credential.user.uid), {
          name: name,
          username: username,
          email: email,
          bio: bio,
          profilePic: 'https://i.pravatar.cc/500?img=50',
        }).then(() => {
          // ? Close signup form
          signupPage.classList.add('slide-out-right');
          signupPage.classList.remove('slide-in-right');
        });
      })
      .catch((error) => {
        document.querySelector('.signup-indicator').style.opacity = '0';
        document.querySelector('.signup-error').innerHTML = `${error.code}`;
        setTimeout(() => {
          document.querySelector('.signup-error').innerHTML = ``;
        }, 3000);
      });
  } else {
    document.querySelector(
      '.signup-error'
    ).innerHTML = `Please fill all fields`;
    document.querySelector('.signup-indicator').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.signup-error').innerHTML = ``;
    }, 3000);
  }
  e.preventDefault();
});

// ? LOGIN FUNCTION
const loginButton = document.querySelector(DOMItems.loginButton);
loginButton.addEventListener('click', (e) => {
  document.querySelector('.login-indicator').style.opacity = '1';
  const email = document.querySelector(DOMItems.loginEmail).value;
  const password = document.querySelector(DOMItems.loginPassword).value;
  if (email !== '' && password !== '') {
    // ? Login user with email and password if login values are valid
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // CLOSE LOGIN FORM
        loginPage.classList.add('slide-out-left');
        loginPage.classList.remove('slide-in-left');
      })
      .catch((error) => {
        document.querySelector('.login-indicator').style.opacity = '0';
        document.querySelector('.login-error').innerHTML = `${error.code}`;
        setTimeout(() => {
          document.querySelector('.login-error').innerHTML = ``;
        }, 3000);
      });
  } else {
    document.querySelector('.login-error').innerHTML = `Please fill all fields`;
    setTimeout(() => {
      document.querySelector('.login-error').innerHTML = ``;
    }, 3000);
    document.querySelector('.login-indicator').style.opacity = '0';
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
          document.querySelector('.login-indicator').style.opacity = '0';
          document.querySelector('.signup-indicator').style.opacity = '0';
        });
      }
    });
  }
});

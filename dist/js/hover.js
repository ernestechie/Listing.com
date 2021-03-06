setInterval(() => {
  if (window.innerWidth <= 768) {
    document.querySelector('#coming-soon').style.display = 'none';
    document.querySelector('#app').style.display = 'block';
  } else {
    document.querySelector('#coming-soon').style.display = 'block';
    document.querySelector('#app').style.display = 'none';
  }
}, 100);

const homeOutlineIcon = document.querySelector('ion-icon[name="home-outline"');
const heartOutlineIcon = document.querySelector(
  'ion-icon[name="heart-outline"'
);
const bookmarkOutlineIcon = document.querySelector(
  'ion-icon[name="bookmark-outline"'
);
const personOutlineIcon = document.querySelector(
  'ion-icon[name="person-outline"'
);

const homePage = document.querySelector('#home');
const favourites = document.querySelector('#favourites');
const saved = document.querySelector('#saved');
const profile = document.querySelector('#profile');

homeOutlineIcon.setAttribute('name', 'home-sharp');
homePage.style.zIndex = '5';
favourites.style.zIndex = '0';
saved.style.zIndex = '0';
profile.style.zIndex = '0';
homePage.style.display = 'block';
favourites.style.display = 'none';
saved.style.display = 'none';
profile.style.display = 'none';

homeOutlineIcon.addEventListener('click', (e) => {
  homeOutlineIcon.setAttribute('name', 'home-sharp');
  heartOutlineIcon.setAttribute('name', 'heart-outline');
  bookmarkOutlineIcon.setAttribute('name', 'bookmark-outline');
  personOutlineIcon.setAttribute('name', 'person-outline');
  homePage.style.zIndex = '5';
  favourites.style.zIndex = '0';
  saved.style.zIndex = '0';
  profile.style.zIndex = '0';
  homePage.style.display = 'block';
  favourites.style.display = 'none';
  saved.style.display = 'none';
  profile.style.display = 'none';
});

heartOutlineIcon.addEventListener('click', (e) => {
  heartOutlineIcon.setAttribute('name', 'heart-sharp');
  homeOutlineIcon.setAttribute('name', 'home-outline');
  bookmarkOutlineIcon.setAttribute('name', 'bookmark-outline');
  personOutlineIcon.setAttribute('name', 'person-outline');
  homePage.style.zIndex = '0';
  favourites.style.zIndex = '5';
  saved.style.zIndex = '0';
  profile.style.zIndex = '0';
  homePage.style.display = 'none';
  favourites.style.display = 'block';
  saved.style.display = 'none';
  profile.style.display = 'none';
});

bookmarkOutlineIcon.addEventListener('click', (e) => {
  bookmarkOutlineIcon.setAttribute('name', 'bookmark');
  homeOutlineIcon.setAttribute('name', 'home-outline');
  heartOutlineIcon.setAttribute('name', 'heart-outline');
  personOutlineIcon.setAttribute('name', 'person-outline');
  homePage.style.zIndex = '0';
  favourites.style.zIndex = '0';
  saved.style.zIndex = '5';
  profile.style.zIndex = '0';
  homePage.style.display = 'none';
  favourites.style.display = 'none';
  saved.style.display = 'block';
  profile.style.display = 'none';
});

personOutlineIcon.addEventListener('click', (e) => {
  personOutlineIcon.setAttribute('name', 'person');
  homeOutlineIcon.setAttribute('name', 'home-outline');
  heartOutlineIcon.setAttribute('name', 'heart-outline');
  bookmarkOutlineIcon.setAttribute('name', 'bookmark-outline');
  homePage.style.zIndex = '0';
  favourites.style.zIndex = '0';
  saved.style.zIndex = '0';
  profile.style.zIndex = '5';
  homePage.style.display = 'none';
  favourites.style.display = 'none';
  saved.style.display = 'none';
  profile.style.display = 'block';
});

const loginLink = document.querySelector('.login');
const signupLink = document.querySelector('.signup');

const loginPage = document.querySelector('.login-page');
const signupPage = document.querySelector('.signup-page');

// ? ACTIVATE LOGIN PAGE FROM HOME
loginLink.addEventListener('click', (e) => {
  loginPage.classList.add('slide-in-left');
  loginPage.classList.remove('slide-out-left');
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-icon')) {
    loginPage.classList.add('slide-out-left');
    loginPage.classList.remove('slide-in-left');
  }
});

// ? ACTIVATE SIGNUP PAGE FROM HOME
signupLink.addEventListener('click', (e) => {
  signupPage.classList.add('slide-in-right');
  signupPage.classList.remove('slide-out-right');
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-icon')) {
    signupPage.classList.add('slide-out-right');
    signupPage.classList.remove('slide-in-right');
  }
});

// ? ACTIVATE LOGIN PAGE FROM SIGNUP PAGE
const gotoLogin = document.querySelector('.goto-login');
const gotoSignup = document.querySelector('.goto-signup');

gotoSignup.addEventListener('click', (e) => {
  loginPage.classList.remove('slide-in-left');
  loginPage.classList.add('slide-out-left');

  signupPage.classList.remove('slide-out-right');
  signupPage.classList.add('slide-in-right');
});

gotoLogin.addEventListener('click', (e) => {
  loginPage.classList.add('slide-in-left');
  loginPage.classList.remove('slide-out-left');

  signupPage.classList.add('slide-out-right');
  signupPage.classList.remove('slide-in-right');
});

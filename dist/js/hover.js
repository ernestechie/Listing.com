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

homeOutlineIcon.setAttribute('name', 'home-sharp');
homeOutlineIcon.addEventListener('click', (e) => {
  homeOutlineIcon.setAttribute('name', 'home-sharp');
  heartOutlineIcon.setAttribute('name', 'heart-outline');
  bookmarkOutlineIcon.setAttribute('name', 'bookmark-outline');
  personOutlineIcon.setAttribute('name', 'person-outline');
});

heartOutlineIcon.addEventListener('click', (e) => {
  heartOutlineIcon.setAttribute('name', 'heart-sharp');
  homeOutlineIcon.setAttribute('name', 'home-outline');
  bookmarkOutlineIcon.setAttribute('name', 'bookmark-outline');
  personOutlineIcon.setAttribute('name', 'person-outline');
});

bookmarkOutlineIcon.addEventListener('click', (e) => {
  bookmarkOutlineIcon.setAttribute('name', 'bookmark');
  homeOutlineIcon.setAttribute('name', 'home-outline');
  heartOutlineIcon.setAttribute('name', 'heart-outline');
  personOutlineIcon.setAttribute('name', 'person-outline');
});

personOutlineIcon.addEventListener('click', (e) => {
  personOutlineIcon.setAttribute('name', 'person');
  homeOutlineIcon.setAttribute('name', 'home-outline');
  heartOutlineIcon.setAttribute('name', 'heart-outline');
  bookmarkOutlineIcon.setAttribute('name', 'bookmark-outline');
});

window.addEventListener('mousemove', () => {
  if (window.innerWidth < 600) {
    document.querySelector('#coming-soon').style.display = 'none';
    document.querySelector('#main').style.display = 'block';
  } else {
    document.querySelector('#coming-soon').style.display = 'block';
    document.querySelector('#main').style.display = 'none';
  }
});

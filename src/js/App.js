setInterval(() => {
  if (window.innerWidth <= 768) {
    document.querySelector('#coming-soon').style.display = 'none';
    document.querySelector('#app').style.display = 'block';
  } else {
    document.querySelector('#coming-soon').style.display = 'block';
    document.querySelector('#app').style.display = 'none';
  }
}, 100);

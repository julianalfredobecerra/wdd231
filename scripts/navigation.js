const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');

  if (hamButton.classList.contains('open')) {
    hamButton.setAttribute('aria-label', 'Close navigation menu');
  } else {
    hamButton.setAttribute('aria-label', 'Open navigation menu');
  }
});
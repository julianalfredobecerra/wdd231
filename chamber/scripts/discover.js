const visitKey = 'lastDiscoverVisit';
const now = Date.now();
const last = localStorage.getItem(visitKey);
let message;
if (!last) {
  message = 'Welcome! Let us know if you have any questions.';
} else {
  const days = Math.floor((now - last) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    message = 'Back so soon! Awesome!';
  } else if (days === 1) {
    message = 'You last visited 1 day ago.';
  } else {
    message = `You last visited ${days} days ago.`;
  }
}
document.getElementById('visit-message').textContent = message;
localStorage.setItem(visitKey, now);

fetch('data/members.json')
  .then(res => res.json())
  .then(items => {
    const gallery = document.getElementById('gallery');
    items.forEach((item, i) => {
      const card = document.createElement('article');
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}" width="300" height="200">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button type="button">Learn more</button>
      `;
      gallery.appendChild(card);
    });
  });
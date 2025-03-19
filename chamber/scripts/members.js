window.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
  });
  
  async function fetchMembers() {
    try {

      const response = await fetch('data/members.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const members = await response.json();

      displayAsGrid(members);

      document.getElementById('gridViewBtn').addEventListener('click', () => {
        displayAsGrid(members);
      });
      document.getElementById('listViewBtn').addEventListener('click', () => {
        displayAsList(members);
      });
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  }

  function displayAsGrid(members) {
    const container = document.getElementById('members');

    container.innerHTML = '';

    container.classList.remove('list-view');
    container.classList.add('grid-view');

    members.forEach((member) => {
      const card = document.createElement('div');
      card.classList.add('member-card');
      card.innerHTML = `
        <img src="${member.image}" alt="${member.name} logo" class="member-image">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      `;
      container.appendChild(card);
    });
  }

  function displayAsList(members) {
    const container = document.getElementById('members');

    container.innerHTML = '';

    container.classList.remove('grid-view');
    container.classList.add('list-view');

    members.forEach((member) => {

      const row = document.createElement('div');
      row.classList.add('member-row');
      row.innerHTML = `
        <span class="cell name">${member.name}</span>
        <span class="cell address">${member.address}</span>
        <span class="cell phone">${member.phone}</span>
        <span class="cell website"><a href="${member.website}" target="_blank">${member.website}</a></span>
      `;
      container.appendChild(row);
    });
  }

  let socket = new WebSocket("wss://yourserver.com");

  window.addEventListener("pagehide", () => {
    if (socket) {
      socket.close();
    }
  });

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      reconnectWebSocket();
    }
  });
  
  function reconnectWebSocket() {
    socket = new WebSocket("wss://yourserver.com");
    socket.onopen = () => console.log("Reconnected WebSocket");
  }
  
  
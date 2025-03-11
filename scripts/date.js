const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
document.getElementById('currentyear').textContent = new Date().getFullYear();
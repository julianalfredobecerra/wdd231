const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;
document.getElementById('currentyear').textContent = new Date().getFullYear();
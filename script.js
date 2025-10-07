const overlay = document.getElementById('danger-overlay');
const button = document.getElementById('toggle-btn');

// Alternar overlay con el botón
button.addEventListener('click', () => {
  overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'block' : 'none';
});

// Alternar overlay con la tecla "P"
document.addEventListener('keydown', (e) => {
  if(e.key.toLowerCase() === 'p'){
    overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'block' : 'none';
  }
});

const hamburger = document.getElementById('hamburger');
const navItems = document.querySelector('.navbar-items'); // Use class selector since it's a <ul>

hamburger.addEventListener('click', () => {
  navItems.classList.toggle('show');
});

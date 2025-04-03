/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

  const hamburgerBtn = document.querySelector('#hamburgerBtn');
const primaryNav = document.querySelector('.primaryNav');

hamburgerBtn.addEventListener('click', () => {primaryNav.classList.toggle('open');
});
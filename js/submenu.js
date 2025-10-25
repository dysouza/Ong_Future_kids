const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.linksPrincipais');

toggle.addEventListener('click', () => {
nav.classList.toggle('active');
});

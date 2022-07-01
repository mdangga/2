const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const h4 = document.querySelector('.judul h4');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
    h4.classList.toggle('hilang');
});

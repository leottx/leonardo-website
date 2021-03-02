const menuToogle = document.querySelector('.nav-toogle');
const navbar = document.querySelector('.nav-collapse');

menuToogle.addEventListener('click', () => {
    navbar.classList.toggle('show');
    
});
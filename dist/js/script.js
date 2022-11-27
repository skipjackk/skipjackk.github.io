window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const topPage = document.querySelector('#top-page');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        topPage.classList.remove('hidden');
        topPage.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        topPage.classList.remove('flex');
        topPage.classList.add('hidden');
    }
}

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})
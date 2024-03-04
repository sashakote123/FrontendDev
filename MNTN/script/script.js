
console.log('123')
const mobileNavBtn = document.querySelector('.burger-button');
const mobileNav = document.querySelector('.mobile-nav');
const heroHeader = document.querySelector('.hero');
const body = document.body



mobileNavBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active');
    body.classList.toggle('no-scroll');
});

window.addEventListener('click', () => {
    //mobileNav.classList.toggle('mobile-nav-active');

    if (body.classList.contains('no-scroll')) {
        mobileNav.classList.toggle('mobile-nav-active');
        body.classList.toggle('no-scroll');
    }


});

mobileNav.addEventListener('click', (event) => {
    event.stopPropagation();
})



AOS.init();
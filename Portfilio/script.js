const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img')


navBtn.onclick = () => {
    if (nav.classList.toggle('open')){
        navBtnImg.src = './source/nav-btn-close.svg';
    } else{
        navBtnImg.src = './source/navButton.svg';
    }
}


AOS.init();


const btnDarkMode = document.querySelector('.dark-mode-btn');

if(localStorage.getItem('isDark') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
       localStorage.setItem('isDark', 'dark');
    }else{
        localStorage.setItem('isDark', 'light');
    }

}
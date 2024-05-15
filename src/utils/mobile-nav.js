
const mobileNav = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    const headerBtn = document.querySelector('.header__bars');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    // State
    let isMobileNavOpen = false;
    
    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        mobileNav.style.display = isMobileNavOpen ? 'flex' : 'none';
        document.body.style.overflowY = isMobileNavOpen ? 'hidden' : 'auto';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });
}

export default mobileNav;
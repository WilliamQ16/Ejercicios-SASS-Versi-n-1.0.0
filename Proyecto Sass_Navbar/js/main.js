const headerToggle = document.getElementById('header-toggle'), main = document.getElementById('main'), navClose = document.getElementById('nav-close');

if (headerToggle) {
    headerToggle.addEventListener('click', () => {
        main.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        main.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    main.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });

}

window.addEventListener('scroll', scrollActive);
const toggle = document.querySelector('#toggle');
const nav = document.querySelector('.header__nav');
const navLinks = nav.querySelectorAll('.nav .nav__link[data-id]');
const currentYear = document.querySelector('#current_year');

toggle.addEventListener('click', event => {
    event.preventDefault();

    scrollTo({ top: 0, behavior: 'smooth' });

    nav.classList.toggle('nav_visible');
    document.body.classList.toggle('disable-scroll');
});

for (let link of navLinks) {
    link.addEventListener('click', event => {
        event.preventDefault();

        const target = document.querySelector(`#${link.dataset.id}`);

        target.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });

        nav.classList.remove('nav_visible');
        document.body.classList.remove('disable-scroll');
    });
}

const services = document.querySelectorAll('.service[data-id]');

for (let service of services) {
    service.addEventListener('click', event => {
        event.preventDefault();

        const target = document.querySelector(`#${service.dataset.id}`);

        target.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    });
}

const buttons = document.querySelectorAll('button[data-id]:not([class*="slider__button"])');
for (let button of buttons) {
    button.addEventListener('click', event => {
        event.preventDefault();

        const target = document.querySelector(`#${button.dataset.id}`);

        target.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    });
}

const telInput = document.querySelector('input[type="tel"]');
const expr = /[-_=\.\,;:"'`\\\/\|!@#$%^&*()/a-zA-Zа-яА-Я ]/;
telInput.addEventListener('keypress', event => {
    if (expr.test(event.key)) {
        event.preventDefault();
    }
});

telInput.addEventListener('change', event => {
    if (expr.test(telInput.value)) {
        telInput.value = '';
    }
});

const pageUp = document.querySelector('.page-up');
pageUp.addEventListener('click', event => {
    event.preventDefault();

    scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

for (let type of ['load', 'scroll']) {
    window.addEventListener(type, () => {
        if (scrollY >= 400) {
            pageUp.classList.add('visible');
        } else {
            pageUp.classList.remove('visible');
        }
    });
}

currentYear.innerText = new Date().getFullYear();

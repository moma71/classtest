console.log('Portfolio loaded');

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const body = document.body;

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

// Hero Animation Trigger
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.classList.add('visible');
});


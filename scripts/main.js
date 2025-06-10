// Common scripts for MP Psicología

// Toggle navigation menu
function setupMenuToggle() {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
            navToggle.classList.toggle('open');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-open');
                navToggle.classList.remove('open');
            });
        });
    }
}

function setupScrollAnimations() {
    const items = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    items.forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', () => {
    setupMenuToggle();
    setupScrollAnimations();
});

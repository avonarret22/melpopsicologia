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
    }
}

document.addEventListener('DOMContentLoaded', setupMenuToggle);

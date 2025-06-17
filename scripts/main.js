// Common scripts for MP Psicología

// Toggle navigation menu
function setupMenuToggle() {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');
    const submenu = document.querySelector('.submenu');
    const submenuParent = document.querySelector('.nav-parent');

    if (submenu) {
        submenu.classList.remove('open');
    }

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
            navToggle.classList.toggle('open');
        });

        if (submenuParent && submenu) {
            submenuParent.addEventListener('click', (e) => {
                e.preventDefault();
                submenu.classList.toggle('open');
            });
        }

        document.querySelectorAll('.nav-link:not(.nav-parent)').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-open');
                navToggle.classList.remove('open');
                if (submenu) {
                    submenu.classList.remove('open');
                }
            });
        });

        document.querySelectorAll('.submenu-items a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-open');
                navToggle.classList.remove('open');
                if (submenu) {
                    submenu.classList.remove('open');
                }
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

function setupFloatingWpp() {
    const btn = document.getElementById('floating-wpp');
    if (!btn) return;
    function toggle() {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }
    window.addEventListener('scroll', toggle);
    toggle();
}
document.addEventListener('DOMContentLoaded', () => {
    setupMenuToggle();
    setupScrollAnimations();
    setupFloatingWpp();
});

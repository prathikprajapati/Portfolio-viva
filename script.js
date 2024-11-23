// Typing animation
var typed = new Typed('#element', {
    strings: ["Graphics Designer ", "Web Developer ", "Python Developer "],
    typeSpeed: 120,
    backSpeed: 140,
    loop: true,
    smartBackspace: true,
    backDelay: 1500
});

//Navbar animation
$('.expandHome').mouseover(function () {
    $('.sub-home').css({
        'display': 'block'
    });
});
$('#quadrilateral').mouseleave(function () {
    $('#quadrilateral').css({
        'margin-top': '-53px'
    });
    $('.sub-home').css({
        'display': 'none'
    });
}).mouseenter(function () {
    $('#quadrilateral').css({
        'margin-top': '0px'
    });
});

// Theme Toggle
function toggleTheme() {
    const root = document.documentElement;
    const themeIcon = document.querySelector('.theme-toggle i');

    if (root.getAttribute('data-theme') === 'light') {
        root.removeAttribute('data-theme');
        themeIcon.classList.remove('la-sun');
        themeIcon.classList.add('la-moon');
    } else {
        root.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('la-moon');
        themeIcon.classList.add('la-sun');
    }
}

// Initialize theme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (!prefersDark) {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('.theme-toggle i').classList.replace('la-moon', 'la-sun');
}

// Open the modal when the "Contact" link is clicked
document.getElementById('contact-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('contactModal').style.display = 'block';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function (event) {
    if (event.target == document.getElementById('contactModal')) {
        document.getElementById('contactModal').style.display = 'none';
    }
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Filter projects functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                // First hide all cards with animation
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        // Show relevant cards with animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });
});
// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Typing Animation for Hero Subtitle
const typingText = document.getElementById('typing-text');
const subtitleText = 'Aspiring Software Developer & AI Enthusiast';
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;
    
    const currentText = isDeleting 
        ? subtitleText.substring(0, charIndex - 1)
        : subtitleText.substring(0, charIndex + 1);
    
    typingText.textContent = currentText;
    
    if (!isDeleting && charIndex < subtitleText.length - 1) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            setTimeout(typeEffect, 2000);
        } else {
            setTimeout(typeEffect, 500);
        }
    }
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Update aria-expanded for accessibility
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
});

// Close Mobile Menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Sticky Navbar Scroll Effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when scrolling down
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    }
});

// Handle escape key to close mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
    }
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Reset previous error states
        [name, email, message].forEach(field => {
            field.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        // Validate name
        if (!name.value.trim()) {
            name.style.borderColor = '#ff6b6b';
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            email.style.borderColor = '#ff6b6b';
            isValid = false;
        }
        
        // Validate message
        if (!message.value.trim()) {
            message.style.borderColor = '#ff6b6b';
            isValid = false;
        }
        
        if (isValid) {
            // Form is valid, you can add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        }
    });
    
    // Add input event listeners to clear error states
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });
}

// Scroll-Triggered Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in or fade-in-up classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    animatedElements.forEach(el => observer.observe(el));
});

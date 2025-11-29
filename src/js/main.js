/**
 * Spartanz 300 - Main JavaScript
 * Gaming Clan Website
 */

'use strict';

// ===== DOM Content Loaded =====
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initSmoothScroll();
    initNavbarBehavior();
});

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        observer.observe(section);
    });
}

// ===== Smooth Scrolling for Anchor Links =====
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile navbar if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            }
        });
    });
}

// ===== Navbar Behavior =====
function initNavbarBehavior() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Change navbar style on scroll
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
    }

    // Use debounced scroll handler for better performance
    window.addEventListener('scroll', debounce(handleNavbarScroll, 10));
    
    // Initial call
    handleNavbarScroll();
}

// ===== Update Active Navigation Link =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let currentSection = '';
    
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(function(link) {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === '#' + currentSection || (currentSection === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ===== Utility Functions =====

/**
 * Debounce function to limit how often a function is called
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const args = arguments;
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}

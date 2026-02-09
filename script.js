// ================================
// PAGE LOADER - Hide after 2 seconds
// ================================
setTimeout(function() {
    var loader = document.getElementById('pageLoader');
    if (loader) {
        loader.classList.add('loaded');
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        loader.style.pointerEvents = 'none';
    }
}, 2000);

// ================================
// NAVIGATION
// ================================
document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
    var navToggle = document.getElementById('navToggle');
    var navMenu = document.getElementById('navMenu');
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            if (navToggle) navToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (navbar && window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else if (navbar) {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                var offset = 80;
                var position = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: position, behavior: 'smooth' });
            }
        });
    });
});

// ================================
// SCROLL PROGRESS BAR
// ================================
window.addEventListener('scroll', function() {
    var scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        var scrollTop = document.documentElement.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var progress = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = progress + '%';
    }
});

// ================================
// SCROLL TO TOP BUTTON
// ================================
var scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (scrollTopBtn) {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ================================
// CONSOLE MESSAGE
// ================================
console.log('%c👋 Hello there!', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #6c757d;');
console.log('%cLooking for a Mechanical Engineer? Lets connect!', 'font-size: 14px; color: #10b981;');

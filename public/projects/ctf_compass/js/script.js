document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme based on saved preference or system preference
    initTheme();
    
    // Set current year in footer
    const currentYearElement = document.querySelector('.current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks && menuToggle && navLinks.classList.contains('active') && 
            !event.target.closest('.nav-links') && 
            !event.target.closest('.menu-toggle')) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active') && menuToggle) {
                    navLinks.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            toggleTheme();
        });
    }
    
    // Add simple fade-in animation to elements
    addScrollAnimation();
    
    // Simple particles animation
    createSimpleParticles();
});

// Theme management functions
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
    
    // Listen for system theme changes if supported
    if (window.matchMedia) {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if (darkModeMediaQuery.addEventListener) {
            darkModeMediaQuery.addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    if (e.matches) {
                        enableDarkMode();
                    } else {
                        enableLightMode();
                    }
                }
            });
        }
    }
}

function toggleTheme() {
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    
    if (isDarkMode) {
        enableLightMode();
        localStorage.setItem('theme', 'light');
    } else {
        enableDarkMode();
        localStorage.setItem('theme', 'dark');
    }
}

function enableDarkMode() {
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode');
    updateThemeIcon('sun');
}

function enableLightMode() {
    document.documentElement.classList.remove('dark-mode');
    document.body.classList.remove('dark-mode');
    updateThemeIcon('moon');
}

function updateThemeIcon(iconType) {
    const themeToggle = document.querySelector('.theme-toggle i');
    if (themeToggle) {
        themeToggle.className = iconType === 'sun' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Add simple fade-in animation to elements when they become visible
function addScrollAnimation() {
    const animatedElements = document.querySelectorAll('.feature-card, .step, .pricing-card');
    
    // Add initial styles
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Add CSS class for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Simple scroll detection for animation
    function checkElementsInView() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animate-in')) {
                element.classList.add('animate-in');
            }
        });
    }
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Check elements on scroll and initially
    window.addEventListener('scroll', checkElementsInView);
    checkElementsInView();
}

// Create simple particles
function createSimpleParticles() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    
    // Clear any existing particles
    particlesContainer.innerHTML = '';
    
    // Determine number of particles based on device
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 10 : 20;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 5px and 15px
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random opacity
        particle.style.opacity = (Math.random() * 0.2 + 0.05).toString();
        
        // Add particle to container
        particlesContainer.appendChild(particle);
        
        // Animate particle with inline styles instead of keyframes
        animateParticle(particle);
    }
}

// Simple particle animation using CSS transitions
function animateParticle(particle) {
    // Initial state
    let posX = parseFloat(particle.style.left);
    let posY = parseFloat(particle.style.top);
    
    // Add transition
    particle.style.transition = 'transform 10s ease-in-out, opacity 5s ease-in-out';
    
    // Function to move the particle
    function moveParticle() {
        // Random new position
        const newX = Math.random() * 30 - 15; // -15% to +15%
        const newY = Math.random() * 30 - 15; // -15% to +15%
        
        // Apply transform
        particle.style.transform = `translate(${newX}%, ${newY}%)`;
        
        // Random opacity change
        particle.style.opacity = (Math.random() * 0.2 + 0.05).toString();
        
        // Schedule next movement
        setTimeout(moveParticle, 10000);
    }
    
    // Start animation
    moveParticle();
}

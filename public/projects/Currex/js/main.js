// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Initialize tabs
    initTabs();
    
    // Initialize FAQ accordions
    initFAQ();
    
    // Initialize smooth scrolling for navigation links
    initSmoothScroll();
    
    // Initialize app download buttons
    initAppDownloadButtons();
});

// Theme Switcher
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const themeAnimationOverlay = document.querySelector('.theme-animation-overlay');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        body.classList.add('dark-mode');
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function(e) {
        // Set the overlay position to the click position
        const x = e.clientX;
        const y = e.clientY;
        themeAnimationOverlay.style.setProperty('--x', `${x}px`);
        themeAnimationOverlay.style.setProperty('--y', `${y}px`);
        
        // Toggle dark mode class
        body.classList.add('animating');
        
        // Animation size calculation (diagonal of viewport for full coverage)
        const size = Math.max(
            Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)),
            Math.sqrt(Math.pow(window.innerWidth - x, 2) + Math.pow(y, 2)),
            Math.sqrt(Math.pow(x, 2) + Math.pow(window.innerHeight - y, 2)),
            Math.sqrt(Math.pow(window.innerWidth - x, 2) + Math.pow(window.innerHeight - y, 2))
        );
        
        themeAnimationOverlay.style.setProperty('--size', `${size * 2}px`);
        
        // Toggle dark mode after a small delay to allow animation to start
        setTimeout(() => {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
        }, 50);
        
        // Remove animation class after animation completes
        setTimeout(() => {
            body.classList.remove('animating');
        }, 500);
    });
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', function(e) {
        // Only auto-switch if user hasn't explicitly chosen a theme
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        }
    });
}

// Feature Tabs
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the tab to activate
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            document.querySelectorAll('.tab-pane').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Add active class to clicked button and corresponding tab
            this.classList.add('active');
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });
}

// FAQ Accordions
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // Set initial height for transition
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
        
        question.addEventListener('click', function() {
            // Toggle active class
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                faqItem.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// Smooth Scrolling for Navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('header a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get header height to offset scroll position
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add animation on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementPosition < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Activate animation on scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// App Download Buttons
function initAppDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.app-store-badge, .google-play-badge');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a coming soon notification
            const notification = document.createElement('div');
            notification.className = 'coming-soon-notification';
            notification.textContent = 'Coming Soon';
            notification.style.position = 'fixed';
            notification.style.top = '20px';
            notification.style.left = '50%';
            notification.style.transform = 'translateX(-50%)';
            notification.style.padding = '12px 24px';
            notification.style.backgroundColor = 'var(--primary)';
            notification.style.color = 'white';
            notification.style.borderRadius = '6px';
            notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            notification.style.zIndex = '1000';
            notification.style.animation = 'fadeInOut 3s forwards';
            
            // Add to body
            document.body.appendChild(notification);
            
            // Remove after animation completes
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 3000);
        });
    });
} 
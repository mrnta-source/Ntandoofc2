// MR NTANDO OFC - Main JavaScript File
// Author: MR NTANDO OFC
// Description: Interactive functionality for the main website

class MrNtandoOFC {
    constructor() {
        this.init();
        this.setupEventListeners();
        this.startAnimations();
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupTypingEffect();
        this.setupCounterAnimation();
        this.setupParticleEffect();
    }

    init() {
        console.log('🐞 MR NTANDO OFC - Initializing...');
        this.showWelcomeMessage();
        this.checkBrowserCompatibility();
        this.setupTheme();
    }

    showWelcomeMessage() {
        const messages = [
            '🚀 Welcome to MR NTANDO OFC!',
            '🤖 Bot Expert at your service!',
            '💻 Ready to fix your dead bots?',
            '🎯 Let\'s build something amazing!'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        setTimeout(() => {
            this.showNotification(randomMessage, 'success');
        }, 1000);
    }

    setupEventListeners() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Button hover effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', this.handleButtonHover);
            btn.addEventListener('mouseleave', this.handleButtonLeave);
            btn.addEventListener('click', this.handleButtonClick);
        });

        // Service card interactions
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', this.handleCardHover);
            card.addEventListener('mouseleave', this.handleCardLeave);
        });

        // Admin button special effect
        const adminBtn = document.querySelector('.admin-btn');
        if (adminBtn) {
            adminBtn.addEventListener('click', this.handleAdminAccess);
        }

        // Contact form handling (if exists)
        const contactForms = document.querySelectorAll('form');
        contactForms.forEach(form => {
            form.addEventListener('submit', this.handleFormSubmit);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', this.handleKeyboardShortcuts.bind(this));
    }

    handleButtonHover(e) {
        const btn = e.target;
        btn.style.transform = 'translateY(-3px) scale(1.05)';
        btn.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
        
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        
        btn.style.position = 'relative';
        btn.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }

    handleButtonLeave(e) {
        const btn = e.target;
        btn.style.transform = 'translateY(0) scale(1)';
        btn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    }

    handleButtonClick(e) {
        const btn = e.target;
        
        // Add click animation
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);

        // Track button clicks
        const btnText = btn.textContent.trim();
        console.log(`🔥 Button clicked: ${btnText}`);
        
        // Special handling for different buttons
        if (btnText.includes('Fix Dead Bots')) {
            this.showNotification('🔧 Redirecting to bot repair service...', 'info');
        } else if (btnText.includes('Watch Videos')) {
            this.showNotification('📺 Opening YouTube channel...', 'info');
        } else if (btnText.includes('View Projects')) {
            this.showNotification('💻 Loading GitHub projects...', 'info');
        }
    }

    handleCardHover(e) {
        const card = e.target.closest('.service-card');
        card.style.transform = 'translateY(-10px) rotateX(5deg)';
        card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
        
        // Add glow effect
        card.style.border = '2px solid #4CAF50';
        card.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
    }

    handleCardLeave(e) {
        const card = e.target.closest('.service-card');
        card.style.transform = 'translateY(0) rotateX(0deg)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        card.style.border = 'none';
        card.style.background = 'white';
    }

    handleAdminAccess(e) {
        e.preventDefault();
        
        const password = prompt('🔐 Enter admin password:');
        
        if (password === 'mrnta2024' || password === 'admin123') {
            this.showNotification('✅ Admin access granted!', 'success');
            setTimeout(() => {
                window.location.href = 'admin.html';
            }, 1000);
        } else if (password) {
            this.showNotification('❌ Invalid password!', 'error');
            console.log('🚫 Unauthorized admin access attempt');
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        
        // Show loading state
        this.showNotification('📤 Sending message...', 'info');
        
        // Simulate form submission
        setTimeout(() => {
            this.showNotification('✅ Message sent successfully!', 'success');
            form.reset();
        }, 2000);
        
        console.log('📧 Form submitted:', Object.fromEntries(formData));
    }

    handleKeyboardShortcuts(e) {
        // Ctrl + / for help
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            this.showKeyboardShortcuts();
        }
        
        // Ctrl + H for home
        if (e.ctrlKey && e.key === 'h') {
            e.preventDefault();
            window.location.href = 'main.html';
        }
        
        // Ctrl + C for contact
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            window.location.href = 'contact.html';
        }
        
        // Ctrl + G for GitHub
        if (e.ctrlKey && e.key === 'g') {
            e.preventDefault();
            window.location.href = 'github.html';
        }
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('mobile-active');
                
                // Animate hamburger menu
                const icon = mobileMenuBtn.querySelector('i');
                if (navLinks.classList.contains('mobile-active')) {
                    icon.classList.replace('fa-bars', 'fa-times');
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '100%';
                    navLinks.style.left = '0';
                    navLinks.style.width = '100%';
                    navLinks.style.background = 'rgba(0,0,0,0.9)';
                    navLinks.style.padding = '1rem';
                } else {
                    icon.classList.replace('fa-times', 'fa-bars');
                    navLinks.style.display = 'none';
                }
            });
        }
    }

    setupScrollEffects() {
        // Header background change on scroll
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            if (scrolled > 100) {
                header.style.background = 'rgba(0,0,0,0.9)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.1)';
                header.style.backdropFilter = 'blur(10px)';
            }
        });

        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                hero.style.transform = `translateY(${rate}px)`;
            });
        }

        // Fade in elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.service-card, .stat-card, .section').forEach(el => {
            observer.observe(el);
        });
    }

    setupTypingEffect() {
        const heroText = document.querySelector('.hero p');
        if (heroText) {
            const texts = [
                'Developer • Bot Expert • Educator • Problem Solver',
                'WhatsApp Bot Specialist • Dead Bot Repair Expert',
                'Custom Bot Development • 24/7 Support Available',
                'Voice Cloning • AI Art • Premium Features'
            ];
            
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            
            const typeWriter = () => {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    heroText.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    heroText.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                let typeSpeed = isDeleting ? 50 : 100;
                
                if (!isDeleting && charIndex === currentText.length) {
                    typeSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typeSpeed = 500;
                }
                
                setTimeout(typeWriter, typeSpeed);
            };
            
            // Start typing effect after 2 seconds
            setTimeout(typeWriter, 2000);
        }
    }

    setupCounterAnimation() {
        const counters = document.querySelectorAll('.stat-card h3');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = counter.textContent; // Reset to original
                }
            };
            
            updateCounter();
        };
        
        // Trigger counter animation when stats section is visible
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(counter => animateCounter(counter));
                    statsObserver.unobserve(entry.target);
                }
            });
        });
        
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }
    }

    setupParticleEffect() {
        // Create floating particles in the background
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: rgba(255,255,255,0.5);
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                animation: float 6s linear infinite;
            `;
            
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDelay = Math.random() * 6 + 's';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 6000);
        };
        
        // Create particles periodically
        setInterval(createParticle, 300);
        
        // Add CSS animation for particles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
            
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        const colors = {
            success: '#4CAF50',
            error: '#f44336',
            warning: '#ff9800',
            info: '#2196F3'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Add slide animations
        if (!document.querySelector('#notification-styles')) {
            const notificationStyles = document.createElement('style');
            notificationStyles.id = 'notification-styles';
            notificationStyles.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(notificationStyles);
        }
    }

    showKeyboardShortcuts() {
        const shortcuts = `
🎯 MR NTANDO OFC - Keyboard Shortcuts:

Ctrl + H - Home
Ctrl + C - Contact
Ctrl + G - GitHub
Ctrl + / - Show this help

🐞 Happy coding!
        `;
        
        alert(shortcuts);
    }

    checkBrowserCompatibility() {
        const isCompatible = 'IntersectionObserver' in window && 
                           'requestAnimationFrame' in window &&
                           'localStorage' in window;
        
        if (!isCompatible) {
            this.showNotification('⚠️ Your browser may not support all features', 'warning');
        }
    }

    setupTheme() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('mrntando-theme');
        if (savedTheme) {
            document.body.classList.add(savedTheme);
        }
        
        // Add theme toggle functionality (can be expanded)
        console.log('🎨 Theme system initialized');
    }

    startAnimations() {
        // Add entrance animations to elements
        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 500);
    }

    // Utility methods
    static formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    static getRandomColor() {
        const colors = ['#4CAF50', '#2196F3', '#ff9800', '#f44336', '#9c27b0'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.mrNtandoApp = new MrNtandoOFC();
    
    // Add global error handling
    window.addEventListener('error', (e) => {
        console.error('🚫 Error occurred:', e.error);
    });
    
    // Add performance monitoring
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`⚡ Page loaded in ${Math.round(loadTime)}ms`);
    });
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MrNtandoOFC;
}

// Add some fun console messages
console.log(`
🐞 ================================
   MR NTANDO OFC - Bot Expert
   Website Loaded Successfully!
   
   🚀 Ready to fix dead bots?
   💻 Custom bot development
   🎓 Learning resources available
   
   Contact: wa.me/263777124998
================================
`);

// Easter egg - Konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konami.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 Easter egg found! You are a true developer! 🐞');
        }, 2000);
        
        // Add rainbow animation
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
    }
});

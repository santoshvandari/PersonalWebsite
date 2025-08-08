// Enhanced JavaScript for Backend Developer Portfolio
(() => {
    'use strict';

    // DOM Elements
    const elements = {
        header: document.querySelector('header'),
        logo: document.querySelector('.logo'),
        hamburger: document.querySelector('.hamburger'),
        navLinks: document.querySelector('.nav-links'),
        preloader: document.querySelector('.preloader'),
        typingElement: document.getElementById('typing'),
        hoverElement: document.getElementById('text-hover-effect'),
        terminalTyping: document.getElementById('terminal-typing'),
        contactForm: document.querySelector('.contact-form'),
        cursorTrail: document.querySelector('.cursor-trail'),
        matrixBg: document.getElementById('matrix-bg')
    };

    // Configuration
    const config = {
        typingSpeed: 80,
        backSpeed: 60,
        allowedChars: ['X', '$', 'Y', '#', '?', '*', '0', '1', '+', '{', '}', '<', '>', '/', '\\'],
        matrixChars: '01',
        matrixColumns: 100,
        matrixSpeed: 50
    };

    // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        initializeApp();
    });

    // Main initialization function
    function initializeApp() {
        initializePreloader();
        initializeNavigation();
        initializeScrollEffects();
        initializeTypingAnimations();
        initializeHoverEffects();
        initializeCursorTrail();
        initializeMatrixBackground();
        initializeContactForm();
        initializeAOS();
        initializeParallax();
        initializeSmoothScrolling();
    }

    // Preloader with enhanced loading animation
    function initializePreloader() {
        const terminal = elements.preloader?.querySelector('.terminal-loader');
        if (!terminal) return;

        // Simulate loading process
        const loadingSteps = [
            'Initializing backend systems...',
            'Loading API endpoints...',
            'Connecting to database...',
            'Optimizing queries...',
            'Starting server...',
            'Ready to serve! 🚀'
        ];

        let currentStep = 0;
        const loadingText = terminal.querySelector('.loading-text .command');
        
        const showNextStep = () => {
            if (currentStep < loadingSteps.length) {
                loadingText.textContent = loadingSteps[currentStep];
                currentStep++;
                setTimeout(showNextStep, 500);
            } else {
                setTimeout(() => {
                    elements.preloader.style.opacity = '0';
                    setTimeout(() => {
                        elements.preloader.style.display = 'none';
                    }, 100);
                }, 300);
            }
        };

        setTimeout(showNextStep, 1000);
    }

    // Enhanced Navigation
    function initializeNavigation() {
        if (!elements.hamburger || !elements.navLinks) return;

        // Mobile menu toggle
        elements.hamburger.addEventListener('click', () => {
            elements.hamburger.classList.toggle('active');
            elements.navLinks.classList.toggle('show');
            document.body.style.overflow = elements.navLinks.classList.contains('show') ? 'hidden' : '';
        });

        // Close mobile menu when clicking on links
        elements.navLinks.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                elements.hamburger.classList.remove('active');
                elements.navLinks.classList.remove('show');
                document.body.style.overflow = '';
            }
        });

        // Add active link highlighting
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');

        const highlightActiveLink = () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', highlightActiveLink);
    }

    // Scroll Effects
    function initializeScrollEffects() {
        if (!elements.header) return;

        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            
            // Header background change
            if (currentScroll > 100) {
                elements.header.classList.add('scrolled');
                if (elements.logo) elements.logo.style.opacity = '1';
            } else {
                elements.header.classList.remove('scrolled');
                if (elements.logo) elements.logo.style.opacity = '0';
            }

            // Header hide/show on scroll
            if (currentScroll > lastScroll && currentScroll > 80) {
                elements.header.style.transform = 'translateY(-100%)';
            } else {
                elements.header.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        });
    }

    // Enhanced Typing Animations
    function initializeTypingAnimations() {
        // Main typing animation with fixed cursor
        if (elements.typingElement) {
            const typed = new Typed('#typing', {
                strings: [
                    'Full-stack Developer',
                    'Python Developer',
                    'JavaScript Developer', 
                    'ETL Developer',
                    'Backend Specialist',
                    'API Architect'
                ],
                typeSpeed: config.typingSpeed,
                backSpeed: config.backSpeed,
                backDelay: 2000,
                loop: true,
                smartBackspace: true,
                showCursor: true,
                cursorChar: '|'
            });
        }

        // Enhanced Terminal typing effect (for About section)
        if (elements.terminalTyping) {
            const terminalText = "Started as a curious learner, evolved into a passionate developer. Building solutions that make a difference, one line of code at a time.";
            typeWriterEnhanced(elements.terminalTyping, terminalText, 50);
        }
    }

    // Enhanced Typewriter effect for terminal with cursor
    function typeWriterEnhanced(element, text, speed) {
        let i = 0;
        element.textContent = '';
        element.style.borderRight = '2px solid #64ffda';
        element.style.paddingRight = '5px';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Blinking cursor effect after typing is complete
                setTimeout(() => {
                    element.style.borderRight = element.style.borderRight === 'none' ? '2px solid #64ffda' : 'none';
                    setTimeout(() => typeWriterEnhanced(element, text, speed), 3000); // Restart after 3 seconds
                }, 500);
            }
        }
        
        type();
    }

    // Enhanced Hover Effects
    function initializeHoverEffects() {
        if (!elements.hoverElement) return;

        const originalText = elements.hoverElement.textContent;
        
        const scrambleText = () => {
            const chars = config.allowedChars;
            let iterations = 0;
            
            const interval = setInterval(() => {
                elements.hoverElement.textContent = originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                
                if (iterations >= originalText.length) {
                    clearInterval(interval);
                }
                
                iterations += 1/3;
            }, 50);
        };

        // Auto-trigger on load
        setTimeout(scrambleText, 3000);
        
        // Trigger on hover
        elements.hoverElement.addEventListener('mouseenter', scrambleText);
    }

    // Advanced Cursor Trail
    function initializeCursorTrail() {
        if (!elements.cursorTrail) return;

        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            elements.cursorTrail.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            elements.cursorTrail.style.opacity = '0';
        });

        // Smooth trail animation
        function animateTrail() {
            const diffX = mouseX - trailX;
            const diffY = mouseY - trailY;
            
            trailX += diffX * 0.1;
            trailY += diffY * 0.1;
            
            elements.cursorTrail.style.left = trailX + 'px';
            elements.cursorTrail.style.top = trailY + 'px';
            
            requestAnimationFrame(animateTrail);
        }
        
        animateTrail();
    }

    // Matrix Background Effect
    function initializeMatrixBackground() {
        if (!elements.matrixBg) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        elements.matrixBg.appendChild(canvas);

        let columns, drops;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = canvas.width / 20;
            drops = new Array(Math.floor(columns)).fill(1);
        }

        function drawMatrix() {
            ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#64ffda';
            ctx.font = '15px JetBrains Mono';

            for (let i = 0; i < drops.length; i++) {
                const text = config.matrixChars[Math.floor(Math.random() * config.matrixChars.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        setInterval(drawMatrix, config.matrixSpeed);
    }

    // Enhanced Contact Form
    function initializeContactForm() {
        if (!elements.contactForm) return;

        const inputs = elements.contactForm.querySelectorAll('input, textarea');
        const submitBtn = elements.contactForm.querySelector('.submit-btn');

        // Input focus effects
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });

        // Form submission with ripple effect
        elements.contactForm.addEventListener('submit', (e) => {
            if (!validateForm()) {
                e.preventDefault();
                return;
            }

            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('btn-ripple');
            submitBtn.appendChild(ripple);

            const rect = submitBtn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';

            setTimeout(() => ripple.remove(), 600);
        });

        function validateForm() {
            let isValid = true;
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    input.style.borderColor = '#ff6b6b';
                    isValid = false;
                } else {
                    input.style.borderColor = '';
                }
            });
            return isValid;
        }
    }

    // Initialize AOS (Animate On Scroll)
    function initializeAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                easing: 'ease-out-cubic'
            });
        }
    }

    // Parallax Effects
    function initializeParallax() {
        const parallaxElements = document.querySelectorAll('.floating-icon');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });
    }

    // Smooth Scrolling for Anchor Links
    function initializeSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = elements.header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Scroll indicator click functionality
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                    const headerHeight = elements.header.offsetHeight;
                    const targetPosition = aboutSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }

    // Performance optimizations
    let ticking = false;
    
    function optimizedScrollHandler(callback) {
        return function() {
            if (!ticking) {
                requestAnimationFrame(callback);
                ticking = true;
            }
        };
    }

    // Debounce function for resize events
    function debounce(func, wait) {
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

    // Resize handler
    window.addEventListener('resize', debounce(() => {
        // Recalculate any size-dependent elements
        if (elements.matrixBg) {
            const canvas = elements.matrixBg.querySelector('canvas');
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        }
    }, 250));

    // Service worker registration for PWA capabilities

    // Error handling
    window.addEventListener('error', (e) => {
        console.error('Global error:', e.error);
    });

    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.toString() === konamiSequence.toString()) {
            // Easter egg activated!
            document.body.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                document.body.style.transform = '';
                alert('🎉 Backend developer secret activated! 🎉');
            }, 2000);
            konamiCode = [];
        }
    });

})();
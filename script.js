document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.querySelector('.back-to-top');
    const contactForm = document.getElementById('contactForm');
    const dots = document.querySelectorAll('.dot');

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Testimonial slider
    const slider = document.querySelector('.testimonials-slider');
    let currentSlide = 0;
    const totalSlides = 3;

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            const scrollAmount = slider.offsetWidth * index;
            slider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            updateDots();
        });
    });

    // Auto-scroll testimonials
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        const scrollAmount = slider.offsetWidth * currentSlide;
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        updateDots();
    }, 5000);

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        console.log('Form submitted:', data);
        
        // Show success message
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        btn.textContent = 'Message Sent!';
        btn.style.backgroundColor = 'var(--sage-green)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
        }, 3000);
    });

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    document.querySelectorAll('.service-card, .gallery-item, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Gallery lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.style.cssText = `
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = imgAlt;
            img.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
            `;
            
            lightbox.appendChild(img);
            document.body.appendChild(lightbox);
            
            // Fade in
            setTimeout(() => {
                lightbox.style.opacity = '1';
            }, 10);
            
            // Close on click
            lightbox.addEventListener('click', function() {
                lightbox.style.opacity = '0';
                setTimeout(() => {
                    lightbox.remove();
                }, 300);
            });
        });
    });

    // Navbar link hover effect
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = 'var(--warm-gold)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                
                if (number) {
                    let count = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        count += increment;
                        if (count >= number) {
                            count = number;
                            clearInterval(timer);
                        }
                        target.textContent = Math.floor(count) + '+';
                    }, 30);
                }
                
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
});

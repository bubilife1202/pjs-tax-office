document.addEventListener('DOMContentLoaded', function() {
    // ===== Number Count Up Animation =====
    const countUpElements = document.querySelectorAll('[data-count]');
    
    const countUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCountUp(entry.target);
            }
        });
    }, { threshold: 0.5 });

    countUpElements.forEach(el => countUpObserver.observe(el));

    function animateCountUp(element) {
        const target = parseInt(element.dataset.count);
        const suffix = element.dataset.suffix || '';
        const useComma = element.dataset.format === 'comma';
        const duration = 1500; // 1.5초
        const startTime = performance.now();
        
        function easeOutQuart(t) {
            return 1 - Math.pow(1 - t, 4);
        }

        function formatNumber(num) {
            if (useComma) {
                return num.toLocaleString('ko-KR');
            }
            return num.toString();
        }

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(easedProgress * target);
            
            element.textContent = formatNumber(currentValue) + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = formatNumber(target) + suffix;
            }
        }
        
        requestAnimationFrame(update);
    }

    // ===== Mobile Menu Toggle =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

    // ===== Navbar Scroll Effect =====
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.style.boxShadow = 'var(--shadow-sm)';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // ===== Scroll to Top Button =====
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== Form Validation =====
    // Selector updated to match the new class in index.html
    const contactForm = document.querySelector('.modern-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const phoneInput = document.getElementById('phone');
            const phone = phoneInput.value.trim();

            const phoneRegex = /^[\d-]{9,15}$/;
            const hasNumbers = /\d/.test(phone);

            if (!phoneRegex.test(phone) || !hasNumbers) {
                e.preventDefault();
                alert('올바른 전화번호 형식을 입력해주세요.\n예: 010-1234-5678 또는 02-123-4567');
                phoneInput.focus();
                return false;
            }
        });
    }

    // ===== Scroll Reveal Animation =====
    const revealObserverOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    // Service cards - stagger effect
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to all cards when first one is visible
                serviceCards.forEach(card => card.classList.add('reveal-visible'));
                serviceObserver.disconnect();
            }
        });
    }, revealObserverOptions);

    serviceCards.forEach(card => serviceObserver.observe(card));

    // Contact cards - stagger effect
    const contactCards = document.querySelectorAll('.contact-card');
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('reveal-visible');
                    }, index * 100);
                });
                contactObserver.disconnect();
            }
        });
    }, revealObserverOptions);

    contactCards.forEach(card => contactObserver.observe(card));

    // General reveal for other elements
    const generalRevealElements = document.querySelectorAll('.about-content-centered, .section-header');
    const generalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                generalObserver.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    generalRevealElements.forEach(el => generalObserver.observe(el));
});

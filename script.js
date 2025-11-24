document.addEventListener('DOMContentLoaded', function() {
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

    // ===== Smooth Scrolling (Backup for old browsers) =====
    // Note: CSS scroll-behavior handles most of this now, but we keep this for offset adjustment if needed
    // However, with CSS scroll-padding-top, the native anchor jump is usually correct.
    // We will rely on CSS for the smooth scroll, but this listener ensures the mobile menu closes.

    // ===== Navbar Scroll Effect =====
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.style.boxShadow = 'var(--box-shadow)';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // ===== Scroll to Top Button =====
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        // Show/Hide button on scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        // Click event
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== Form Validation =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const phoneInput = document.getElementById('phone');
            const phone = phoneInput.value.trim();

            // Stricter Regex:
            // - Must contain numbers
            // - Can contain hyphens
            // - Min length 9 (e.g. 02-123-4567)
            // - Max length 15
            const phoneRegex = /^[\d-]{9,15}$/;
            // Also check if it has at least some numbers, not just hyphens
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
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-card, .info-box, .about-text, .about-profile, .about-philosophy');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        // Stagger delay for elements in the same container (simple approximation)
        // Ideally we would do this by checking siblings, but this works generally
        observer.observe(el);
    });
});

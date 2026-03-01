document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight active section on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('a[href^="#"]');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Add animation effects on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize animations
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Initialize animations when page loads
    animateOnScroll();

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 0, 0, 0.95)';
        } else {
            header.style.backgroundColor = 'var(--primary-color)';
        }
    });

    // Apply red theme color to body and other elements
    document.addEventListener('DOMContentLoaded', function() {
        document.body.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
        document.querySelector('header').style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
        document.querySelector('main').style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
        document.querySelector('footer').style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
        document.querySelector('nav').style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
    });

    // Add hover effects to feature cards with red accent
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform var(--transition-speed) ease';
            this.style.boxShadow = '0 4px 8px rgba(255, 0, 0, 0.4)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add interactive elements for best practices with red highlight
    const practiceItems = document.querySelectorAll('.practice-item');
    practiceItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            this.style.transition = 'background-color var(--transition-speed) ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        });
    });
});
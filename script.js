// ===== Navigation Functionality =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navLinksItems = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu on link click
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const logoImg = document.querySelector('.logo-img');
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
        if (logoImg) {
            logoImg.style.height = '60px';
        }
    } else {
        navbar.classList.remove('scrolled');
        if (logoImg) {
            logoImg.style.height = '80px';
        }
    }
    
    lastScroll = currentScroll;
});

// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Stagger animations for grid items
            if (entry.target.closest('.services-grid')) {
                const cards = entry.target.closest('.services-grid').querySelectorAll('.service-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
            
            if (entry.target.closest('.values-content')) {
                const items = entry.target.closest('.values-content').querySelectorAll('.value-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.section-header, .about-content, .services-grid, .values-content, .cta-content, .contact-content').forEach(el => {
    observer.observe(el);
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        submitButton.textContent = 'Message Sent!';
        submitButton.style.background = '#28a745';
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.background = '';
            submitButton.disabled = false;
        }, 3000);
        
        // Log form data (replace with actual submission)
        console.log('Form submitted:', data);
    }, 1500);
});

// ===== Add Animation Styles =====
const style = document.createElement('style');
style.textContent = `
    .section-header,
    .about-content,
    .services-grid,
    .values-content,
    .cta-content,
    .contact-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .section-header.animate,
    .about-content.animate,
    .services-grid.animate,
    .values-content.animate,
    .cta-content.animate,
    .contact-content.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .service-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
    }
    
    .value-item {
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.5s ease;
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// ===== Active Navigation Link =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Parallax Effect for Hero =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        // Faster fade out - hero content fades completely by 300px scroll
        const fadeSpeed = Math.max(0, 1 - (scrolled / 300));
        heroContent.style.opacity = fadeSpeed;
        
        // Less parallax movement to prevent overlap
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// ===== Initialize on Load =====
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader after page loads
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hide');
        document.body.style.overflow = 'visible';
    }, 1500);
    
    // Trigger animations for elements in view on load
    setTimeout(() => {
        document.querySelectorAll('.section-header, .hero-content').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('animate');
            }
        });
    }, 2000);
});

// ===== Project Filtering =====
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== Testimonial Carousel =====
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

// Event listeners
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
});

// Auto-rotate testimonials
setInterval(nextSlide, 5000);

// ===== Back to Top Button =====
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== FAQ Accordion =====
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Close all other FAQs
        faqQuestions.forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        });
        
        // Toggle current FAQ
        if (!isActive) {
            question.classList.add('active');
            answer.classList.add('active');
        }
    });
});

// ===== Auto-update Copyright Year =====
document.getElementById('currentYear').textContent = new Date().getFullYear();

console.log('Kiyanaw Askiy Construction website loaded successfully!');
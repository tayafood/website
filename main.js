/**
 * TAYA FOOD - Main JavaScript
 * Version: 1.0
 * Features: Modal, Mobile Menu, Product Filter, Scroll Effects, Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // 1. PERSONA MODAL (MVP - "Bạn là ai?")
    // ============================================
    const modal = document.getElementById('persona-modal');
    const modalClose = document.getElementById('modal-close');
    const skipModal = document.getElementById('skip-modal');
    const personaBtns = document.querySelectorAll('.persona-btn');
    
    // Persona content mapping - đổi CTA dựa trên lựa chọn
    const personaContent = {
        oem: {
            title: 'Đối Tác Chiến Lược <br>Gia Công OEM/ODM Chuyên Nghiệp',
            desc: 'Tạo thương hiệu riêng với công thức độc quyền. <br>Từ ý tưởng đến kệ hàng - chúng tôi đồng hành cùng bạn.',
            ctaPrimary: 'Xem Quy Trình OEM',
            ctaPrimaryLink: '#oem',
            ctaSecondary: 'Nhận Mẫu Thử Miễn Phí'
        },
        fb: {
            title: 'Giải Pháp Nguyên Liệu <br>Cho Chuỗi F&B & Nhà Hàng',
            desc: 'Cung cấp gia vị, xốt chất lượng ổn định với số lượng lớn. <br>Đảm bảo hương vị đồng nhất cho mọi chi nhánh.',
            ctaPrimary: 'Xem Sản Phẩm',
            ctaPrimaryLink: '#products',
            ctaSecondary: 'Nhận Báo Giá Sỉ'
        },
        wholesale: {
            title: 'Cơ Hội Kinh Doanh <br>Trở Thành Đối Tác Phân Phối',
            desc: 'Sản phẩm đa dạng, chất lượng cao, giá cạnh tranh. <br>Chính sách hỗ trợ đại lý hấp dẫn.',
            ctaPrimary: 'Tải Catalog Sản Phẩm',
            ctaPrimaryLink: '#products',
            ctaSecondary: 'Đăng Ký Làm Đại Lý'
        },
        export: {
            title: 'Đối Tác Xuất Khẩu <br>Chuẩn Chất Lượng Quốc Tế',
            desc: 'Sản phẩm đạt tiêu chuẩn ISO 22000:2018, sẵn sàng xuất khẩu. <br>Hỗ trợ thủ tục và chứng nhận.',
            ctaPrimary: 'Xem Năng Lực',
            ctaPrimaryLink: '#capacity',
            ctaSecondary: 'Liên Hệ Ngay'
        },
        startup: {
            title: 'Hỗ Trợ Startup <br>Bắt Đầu Với MOQ Linh Hoạt',
            desc: 'Đơn hàng mẫu từ số lượng nhỏ. R&D công thức theo yêu cầu. <br>Chi phí hợp lý, chất lượng không đổi.',
            ctaPrimary: 'Xem Quy Trình',
            ctaPrimaryLink: '#oem',
            ctaSecondary: 'Tư Vấn Miễn Phí'
        }
    };
    
    // Check if user has already selected persona (localStorage)
    const selectedPersona = localStorage.getItem('tayafood_persona');
    
    // Show modal after 2 seconds if no persona selected
    if (!selectedPersona) {
        setTimeout(() => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 2000);
    }
    
    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Close modal events
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (skipModal) {
        skipModal.addEventListener('click', () => {
            localStorage.setItem('tayafood_persona', 'skipped');
            closeModal();
        });
    }
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Persona button selection
    personaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const persona = btn.dataset.persona;
            // Use English content if available (for /en/ pages)
            const contentSource = window.personaContentEN || personaContent;
            const content = contentSource[persona];
            
            // Save to localStorage
            localStorage.setItem('tayafood_persona', persona);
            
            // Update hero content
            const heroTitle = document.getElementById('hero-title');
            const heroDesc = document.getElementById('hero-desc');
            const heroCtaPrimary = document.getElementById('hero-cta-primary');
            const heroCtaSecondary = document.getElementById('hero-cta-secondary');
            
            if (heroTitle && content) {
                heroTitle.innerHTML = content.title;
            }
            if (heroDesc && content) {
                heroDesc.innerHTML = content.desc;
            }
            if (heroCtaPrimary && content) {
                heroCtaPrimary.textContent = content.ctaPrimary;
                heroCtaPrimary.href = content.ctaPrimaryLink;
            }
            if (heroCtaSecondary && content) {
                heroCtaSecondary.textContent = content.ctaSecondary;
            }
            
            // Update form dropdown
            const interestSelect = document.querySelector('select[name="interest"]');
            if (interestSelect) {
                interestSelect.value = persona;
            }
            
            // Close modal
            closeModal();
            
            // Scroll to hero
            document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // ============================================
    // 2. MOBILE MENU
    // ============================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ============================================
    // 3. PRODUCT FILTER (Tabs)
    // ============================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const target = btn.dataset.target;
            
            productCards.forEach(card => {
                if (target === 'all' || card.dataset.category === target) {
                    card.style.display = 'block';
                    // Add animation
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // ============================================
    // 4. NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            navbar.style.background = 'rgba(255,255,255,0.98)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            navbar.style.background = '#fff';
        }
    });
    
    // ============================================
    // 5. SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ============================================
    // 6. BACK TO TOP BUTTON
    // ============================================
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ============================================
    // 7. CONTACT FORM HANDLING
    // ============================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.phone || !data.interest) {
                alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
                return;
            }
            
            // Phone validation (Vietnam)
            const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
            if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
                alert('Số điện thoại không hợp lệ!');
                return;
            }
            
            // Here you would typically send data to server
            // For now, we'll just show a success message
            console.log('Form submitted:', data);
            
            // Success feedback
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Đã gửi thành công!';
            submitBtn.style.background = '#10B981';
            submitBtn.disabled = true;
            
            // Reset after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                this.reset();
            }, 3000);
            
            // In production, you would send to:
            // - Email API (EmailJS, Formspree, etc.)
            // - Backend server
            // - CRM integration
        });
    }
    
    // ============================================
    // 8. LANGUAGE SWITCHER
    // ============================================
    const langLinks = document.querySelectorAll('.lang-switcher a');
    
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Only prevent default if it's just a hash link
            if (href === '#') {
                e.preventDefault();
                return;
            }
            // Otherwise let the browser navigate to the href
        });
    });
    
    // ============================================
    // 9. INTERSECTION OBSERVER (Animate on Scroll)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.trust-item, .timeline-item, .product-card, .capacity-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // ============================================
    // 10. VIDEO FALLBACK
    // ============================================
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        heroVideo.addEventListener('error', function() {
            // If video fails to load, hide it and show poster
            this.style.display = 'none';
        });
    }
    
    // ============================================
    // 11. ESCAPE KEY TO CLOSE MODAL
    // ============================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // ============================================
    // 12. CONSOLE WELCOME MESSAGE
    // ============================================
    console.log('%c🍴 TAYA FOOD', 'font-size: 24px; font-weight: bold; color: #C4410E;');
    console.log('%cGiải Pháp Hương Vị & Thực Phẩm OEM', 'font-size: 14px; color: #636E72;');
    console.log('%c© 2024 Taya Food Co., Ltd.', 'font-size: 12px; color: #B2BEC3;');
    
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function for performance optimization
 */
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

/**
 * Format phone number for display
 */
function formatPhone(phone) {
    return phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

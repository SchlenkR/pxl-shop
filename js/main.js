/**
 * PXL Clock - Modern Landing Page
 * Featuring: Lenis Smooth Scroll, GSAP Animations, Custom Cursor, Pixel Background
 */

// ========================================
// Initialize on DOM Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initCursor();
    initPixelBackground();
    initGSAPAnimations();
    initParallax();

    // Remove loading state
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-loaded');
});

// ========================================
// Lenis Smooth Scroll
// ========================================
let lenis;

function initLenis() {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target, {
                    offset: -100,
                    duration: 1.5,
                });
            }
        });
    });
}

// ========================================
// Custom Cursor
// ========================================
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    if (!cursor || !follower) return;

    // Only show on desktop
    if (window.innerWidth < 768) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor animation
    function animateCursor() {
        // Main cursor - faster response
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        // Follower - slower, trailing effect
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .feature-card, .gallery-item, .btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering');
            follower.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
            follower.classList.remove('hovering');
        });
    });
}

// ========================================
// Pixel Background Canvas
// ========================================
function initPixelBackground() {
    const canvas = document.getElementById('pixel-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let pixels = [];
    let animationId;

    // Set canvas size
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initPixels();
    }

    // Initialize pixel particles
    function initPixels() {
        pixels = [];
        const pixelCount = Math.floor((canvas.width * canvas.height) / 15000);

        for (let i = 0; i < pixelCount; i++) {
            pixels.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 4 + 2,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                color: getRandomColor(),
                alpha: Math.random() * 0.5 + 0.1,
                pulse: Math.random() * Math.PI * 2,
            });
        }
    }

    // Get random accent color
    function getRandomColor() {
        const colors = [
            '0, 240, 255',    // Cyan
            '255, 0, 170',    // Magenta
            '124, 58, 237',   // Purple
            '34, 197, 94',    // Green
            '245, 158, 11',   // Orange
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pixels.forEach(pixel => {
            // Update position
            pixel.x += pixel.speedX;
            pixel.y += pixel.speedY;

            // Wrap around edges
            if (pixel.x < 0) pixel.x = canvas.width;
            if (pixel.x > canvas.width) pixel.x = 0;
            if (pixel.y < 0) pixel.y = canvas.height;
            if (pixel.y > canvas.height) pixel.y = 0;

            // Pulse effect
            pixel.pulse += 0.02;
            const pulseAlpha = pixel.alpha + Math.sin(pixel.pulse) * 0.1;

            // Draw pixel
            ctx.fillStyle = `rgba(${pixel.color}, ${pulseAlpha})`;
            ctx.fillRect(
                Math.floor(pixel.x),
                Math.floor(pixel.y),
                pixel.size,
                pixel.size
            );
        });

        animationId = requestAnimationFrame(animate);
    }

    // Initialize
    resize();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        resize();
    });

    // Pause animation when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
}

// ========================================
// GSAP Animations
// ========================================
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
        .from('.hero-badge', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.3,
        })
        .from('.title-line', {
            opacity: 0,
            y: 80,
            duration: 1,
            stagger: 0.15,
        }, '-=0.4')
        .from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 0.8,
        }, '-=0.5')
        .from('.hero-cta', {
            opacity: 0,
            y: 30,
            duration: 0.8,
        }, '-=0.4')
        .from('.hero-image-wrapper', {
            opacity: 0,
            scale: 0.9,
            x: 100,
            duration: 1.2,
        }, '-=1')
        .from('.pixel', {
            opacity: 0,
            scale: 0,
            duration: 0.6,
            stagger: 0.1,
        }, '-=0.5')
        .from('.hero-scroll', {
            opacity: 0,
            y: 20,
            duration: 0.6,
        }, '-=0.3');

    // Navigation animation
    gsap.from('.nav', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.2,
    });

    // Marquee animation
    gsap.from('.marquee', {
        scrollTrigger: {
            trigger: '.marquee',
            start: 'top 90%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
    });

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.children, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
            },
            opacity: 0,
            y: 60,
            duration: 1,
            stagger: 0.2,
        });
    });

    // Feature cards
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
            },
            opacity: 0,
            y: 80,
            duration: 0.8,
            delay: i * 0.1,
        });
    });

    // Feature showcase
    gsap.from('.showcase-image', {
        scrollTrigger: {
            trigger: '.feature-showcase',
            start: 'top 70%',
        },
        opacity: 0,
        x: -100,
        duration: 1,
    });

    gsap.from('.showcase-content', {
        scrollTrigger: {
            trigger: '.feature-showcase',
            start: 'top 70%',
        },
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.2,
    });

    // Gallery items
    gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: i * 0.1,
        });
    });

    // Code section
    gsap.from('.code-content', {
        scrollTrigger: {
            trigger: '.code-section',
            start: 'top 70%',
        },
        opacity: 0,
        x: -80,
        duration: 1,
    });

    gsap.from('.code-block', {
        scrollTrigger: {
            trigger: '.code-section',
            start: 'top 70%',
        },
        opacity: 0,
        x: 80,
        duration: 1,
        delay: 0.3,
    });

    // Spec items
    gsap.utils.toArray('.spec-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: '.specs-grid',
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.6,
            delay: i * 0.08,
        });
    });

    // Spec details
    gsap.utils.toArray('.spec-detail').forEach((detail, i) => {
        gsap.from(detail, {
            scrollTrigger: {
                trigger: '.specs-details',
                start: 'top 80%',
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            delay: i * 0.15,
        });
    });

    // CTA section
    gsap.from('.cta-content', {
        scrollTrigger: {
            trigger: '.cta',
            start: 'top 60%',
        },
        opacity: 0,
        y: 80,
        duration: 1,
    });

    // Footer
    gsap.from('.footer-content', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
    });
}

// ========================================
// Parallax Effects
// ========================================
function initParallax() {
    // Parallax section background
    const parallaxImage = document.querySelector('.parallax-image');
    if (parallaxImage) {
        gsap.to(parallaxImage, {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.parallax-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });
    }

    // Parallax content
    const parallaxContent = document.querySelector('.parallax-content');
    if (parallaxContent) {
        gsap.from(parallaxContent, {
            yPercent: 50,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.parallax-section',
                start: 'top center',
                end: 'center center',
                scrub: 1,
            },
        });
    }

    // Hero image subtle parallax
    const heroImage = document.querySelector('.hero-image-wrapper');
    if (heroImage) {
        gsap.to(heroImage, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            },
        });
    }

    // Floating pixels parallax
    gsap.utils.toArray('.pixel').forEach((pixel, i) => {
        gsap.to(pixel, {
            yPercent: 50 + (i * 20),
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            },
        });
    });

    // CTA grid animation
    const ctaGrid = document.querySelector('.cta-grid');
    if (ctaGrid) {
        gsap.to(ctaGrid, {
            backgroundPosition: '60px 60px',
            ease: 'none',
            scrollTrigger: {
                trigger: '.cta',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });
    }
}

// ========================================
// Navigation Scroll Effects
// ========================================
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(10, 10, 15, 0.9) 0%, transparent 100%)';
        nav.style.borderBottom = 'none';
    }

    lastScroll = currentScroll;
});

// ========================================
// Image Lazy Loading Enhancement
// ========================================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
});

// ========================================
// Interactive Tilt Effect on Hero Image
// ========================================
const heroImageWrapper = document.querySelector('.hero-image-wrapper');
if (heroImageWrapper && window.innerWidth > 992) {
    const heroSection = document.querySelector('.hero');

    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 50;
        const rotateY = (centerX - x) / 50;

        heroImageWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroSection.addEventListener('mouseleave', () => {
        heroImageWrapper.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(-5deg)';
    });
}

// ========================================
// Typing Effect for Code Block
// ========================================
function initTypingEffect() {
    const codeBlock = document.querySelector('.code-content-pre code');
    if (!codeBlock) return;

    const originalContent = codeBlock.innerHTML;
    let isVisible = false;

    ScrollTrigger.create({
        trigger: '.code-section',
        start: 'top 60%',
        onEnter: () => {
            if (!isVisible) {
                isVisible = true;
                typeCode(codeBlock, originalContent);
            }
        },
    });
}

function typeCode(element, content) {
    element.innerHTML = '';
    let index = 0;
    const interval = setInterval(() => {
        if (index < content.length) {
            // Handle HTML tags
            if (content[index] === '<') {
                const tagEnd = content.indexOf('>', index);
                element.innerHTML += content.substring(index, tagEnd + 1);
                index = tagEnd + 1;
            } else {
                element.innerHTML += content[index];
                index++;
            }
        } else {
            clearInterval(interval);
        }
    }, 5);
}

// Initialize typing effect after other animations
setTimeout(initTypingEffect, 1000);

// ========================================
// Magnetic Button Effect
// ========================================
document.querySelectorAll('.btn').forEach(btn => {
    if (window.innerWidth < 992) return;

    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ========================================
// Smooth Color Transition for Logo Dot
// ========================================
const logoDots = document.querySelectorAll('.logo-dot');
let hue = 180;

function animateLogoDot() {
    hue = (hue + 0.5) % 360;
    const color = `hsl(${hue}, 100%, 60%)`;

    logoDots.forEach(dot => {
        dot.style.background = `linear-gradient(135deg, ${color} 0%, hsl(${(hue + 60) % 360}, 100%, 50%) 100%)`;
    });

    requestAnimationFrame(animateLogoDot);
}
animateLogoDot();

console.log('%cPXL Clock', 'font-size: 24px; font-weight: bold; color: #00f0ff;');
console.log('%cTime, Reimagined in Pixels', 'font-size: 14px; color: #8a8a9a;');

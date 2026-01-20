/**
 * PXL Clock - Modern Landing Page
 * GSAP Animations, Custom Cursor, Pixel Background
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/style.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ========================================
// Initialize on DOM Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initAnchorLinks();
    initCursor();
    initPixelBackground();
    initGSAPAnimations();
    initParallax();
    initNavScroll();
    initHeroTilt();
    initMagneticButtons();
    initLogoDot();

    // Remove loading state
    document.body.classList.remove('is-loading');
    document.body.classList.add('is-loaded');
});

// ========================================
// Simple Anchor Link Scrolling
// ========================================
function initAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = 100;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'auto'
                });
            }
        });
    });
}

// ========================================
// Pixel Trail Effect
// ========================================
function initCursor() {
    const canvas = document.getElementById('pixel-trail');
    if (!canvas) return;

    // Only show on desktop
    if (window.innerWidth < 768) {
        canvas.style.display = 'none';
        return;
    }

    const ctx = canvas.getContext('2d');
    const pixelSize = 6;
    const pixels = [];
    const fadeSpeed = 0.015;

    const colors = [
        '#00f0ff', // Cyan
        '#ff00aa', // Magenta
        '#7c3aed', // Purple
        '#22c55e', // Green
        '#f59e0b', // Orange
    ];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let lastX = 0;
    let lastY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const spawnPatterns = [
        { dx: 0, dy: 0, chance: 0.7 },     // Center
        { dx: -1, dy: 0, chance: 0.15 },   // Left
        { dx: 1, dy: 0, chance: 0.15 },    // Right
        { dx: 0, dy: -1, chance: 0.15 },   // Up
        { dx: 0, dy: 1, chance: 0.15 },    // Down
    ];

    function spawnPixels(forceSpawn = false) {
        const baseX = Math.floor(mouseX / pixelSize) * pixelSize;
        const baseY = Math.floor(mouseY / pixelSize) * pixelSize;

        // Only spawn if moved to new grid cell (unless forced)
        if (!forceSpawn && baseX === lastX && baseY === lastY) return;
        lastX = baseX;
        lastY = baseY;

        spawnPatterns.forEach(pattern => {
            if (Math.random() < pattern.chance) {
                pixels.push({
                    x: baseX + pattern.dx * pixelSize,
                    y: baseY + pattern.dy * pixelSize,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    alpha: 0.4 + Math.random() * 0.2
                });
            }
        });
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        spawnPixels();
    });

    window.addEventListener('scroll', () => {
        spawnPixels(true);
    }, { passive: true });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw pixels
        for (let i = pixels.length - 1; i >= 0; i--) {
            const pixel = pixels[i];

            // Fade out over time
            pixel.alpha -= fadeSpeed;

            if (pixel.alpha <= 0) {
                pixels.splice(i, 1);
                continue;
            }

            ctx.globalAlpha = pixel.alpha;
            ctx.fillStyle = pixel.color;
            ctx.fillRect(pixel.x, pixel.y, pixelSize, pixelSize);
        }

        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }
    animate();
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

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initPixels();
    }

    function initPixels() {
        pixels = [];
        const pixelCount = Math.floor((canvas.width * canvas.height) / 20000);

        for (let i = 0; i < pixelCount; i++) {
            pixels.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 4 + 2,
                speedX: (Math.random() - 0.5) * 0.2,
                speedY: (Math.random() - 0.5) * 0.2,
                color: getRandomColor(),
                alpha: Math.random() * 0.4 + 0.1,
                pulse: Math.random() * Math.PI * 2,
            });
        }
    }

    function getRandomColor() {
        const colors = [
            '0, 240, 255',
            '255, 0, 170',
            '124, 58, 237',
            '34, 197, 94',
            '245, 158, 11',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pixels.forEach(pixel => {
            pixel.x += pixel.speedX;
            pixel.y += pixel.speedY;

            if (pixel.x < 0) pixel.x = canvas.width;
            if (pixel.x > canvas.width) pixel.x = 0;
            if (pixel.y < 0) pixel.y = canvas.height;
            if (pixel.y > canvas.height) pixel.y = 0;

            pixel.pulse += 0.01;
            const pulseAlpha = pixel.alpha + Math.sin(pixel.pulse) * 0.05;

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

    resize();
    animate();

    window.addEventListener('resize', resize);

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
    // Hero animations
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
        .from('.hero-bg-img', { opacity: 0, scale: 1.1, duration: 1.5 })
        .from('.hero-badge', { opacity: 0, y: 30, duration: 0.8 }, '-=1')
        .from('.title-line', { opacity: 0, y: 80, duration: 1, stagger: 0.15 }, '-=0.6')
        .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.hero-cta', { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
        .from('.pixel', { opacity: 0, scale: 0, duration: 0.6, stagger: 0.1 }, '-=0.5')
        .from('.hero-scroll', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3');

    gsap.from('.nav', { opacity: 0, y: -20, duration: 0.8, delay: 0.2 });

    gsap.from('.marquee', {
        scrollTrigger: { trigger: '.marquee', start: 'top 90%' },
        opacity: 0, y: 30, duration: 0.8,
    });

    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.children, {
            scrollTrigger: { trigger: header, start: 'top 80%' },
            opacity: 0, y: 60, duration: 1, stagger: 0.2,
        });
    });

    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: { trigger: card, start: 'top 85%' },
            opacity: 0, y: 80, duration: 0.8, delay: i * 0.1,
        });
    });

    gsap.from('.showcase-image', {
        scrollTrigger: { trigger: '.feature-showcase', start: 'top 70%' },
        opacity: 0, x: -100, duration: 1,
    });

    gsap.from('.showcase-content', {
        scrollTrigger: { trigger: '.feature-showcase', start: 'top 70%' },
        opacity: 0, x: 100, duration: 1, delay: 0.2,
    });

    gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: { trigger: item, start: 'top 85%' },
            opacity: 0, scale: 0.9, duration: 0.8, delay: i * 0.1,
        });
    });

    // App section
    gsap.from('.app-content', {
        scrollTrigger: { trigger: '.app-section', start: 'top 70%' },
        opacity: 0, x: -80, duration: 1,
    });

    gsap.from('.phone-mockup', {
        scrollTrigger: { trigger: '.app-section', start: 'top 70%' },
        opacity: 0, y: 100, rotation: 10, duration: 1.2,
    });

    gsap.utils.toArray('.app-feature').forEach((feature, i) => {
        gsap.from(feature, {
            scrollTrigger: { trigger: '.app-features', start: 'top 80%' },
            opacity: 0, y: 40, duration: 0.6, delay: i * 0.1,
        });
    });

    gsap.from('.code-content', {
        scrollTrigger: { trigger: '.code-section', start: 'top 70%' },
        opacity: 0, x: -80, duration: 1,
    });

    gsap.from('.code-block', {
        scrollTrigger: { trigger: '.code-section', start: 'top 70%' },
        opacity: 0, x: 80, duration: 1, delay: 0.3,
    });

    gsap.utils.toArray('.spec-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: { trigger: '.specs-grid', start: 'top 80%' },
            opacity: 0, y: 50, scale: 0.9, duration: 0.6, delay: i * 0.08,
        });
    });

    gsap.utils.toArray('.spec-detail').forEach((detail, i) => {
        gsap.from(detail, {
            scrollTrigger: { trigger: '.specs-details', start: 'top 80%' },
            opacity: 0, y: 60, duration: 0.8, delay: i * 0.15,
        });
    });

    gsap.from('.cta-content', {
        scrollTrigger: { trigger: '.cta', start: 'top 60%' },
        opacity: 0, y: 80, duration: 1,
    });

    gsap.from('.footer-content', {
        scrollTrigger: { trigger: '.footer', start: 'top 90%' },
        opacity: 0, y: 40, duration: 0.8,
    });
}

// ========================================
// Parallax Effects
// ========================================
function initParallax() {
    // Hero background parallax - moves slower than scroll
    const heroBg = document.querySelector('.hero-bg-img');
    if (heroBg) {
        gsap.to(heroBg, {
            yPercent: 20,
            scale: 1.1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });
    }

    // Hero content parallax - moves faster than background
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        gsap.to(heroContent, {
            yPercent: -30,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: '80% top',
                scrub: true,
            },
        });
    }

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
                scrub: true,
            },
        });
    }

    const parallaxContent = document.querySelector('.parallax-content');
    if (parallaxContent) {
        gsap.fromTo(parallaxContent,
            { yPercent: 30, opacity: 0 },
            {
                yPercent: -20,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.parallax-section',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );
    }

    // Floating pixels parallax
    gsap.utils.toArray('.pixel').forEach((pixel, i) => {
        gsap.to(pixel, {
            yPercent: 100 + (i * 30),
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });
    });

    // Section titles parallax - subtle upward movement
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title,
            { yPercent: 20 },
            {
                yPercent: -10,
                ease: 'none',
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );
    });

    // Feature cards stagger parallax
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.fromTo(card,
            { yPercent: 15 + (i % 2) * 10 },
            {
                yPercent: -10 - (i % 2) * 5,
                ease: 'none',
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );
    });

    // Gallery items parallax
    gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.fromTo(item,
            { yPercent: 10 + (i % 3) * 5 },
            {
                yPercent: -5 - (i % 3) * 3,
                ease: 'none',
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );
    });

    // Phone mockup parallax
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        gsap.fromTo(phoneMockup,
            { yPercent: 20, rotation: 5 },
            {
                yPercent: -15,
                rotation: -3,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.app-section',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );
    }

    // Code block parallax
    const codeBlock = document.querySelector('.code-block');
    if (codeBlock) {
        gsap.fromTo(codeBlock,
            { yPercent: 15 },
            {
                yPercent: -10,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.code-section',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );
    }

    // Specs grid items parallax
    gsap.utils.toArray('.spec-item').forEach((item, i) => {
        gsap.fromTo(item,
            { yPercent: 20 + (i % 3) * 5 },
            {
                yPercent: -10,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.specs-grid',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );
    });

    // CTA section background grid parallax
    const ctaGrid = document.querySelector('.cta-grid');
    if (ctaGrid) {
        gsap.to(ctaGrid, {
            backgroundPosition: '60px 60px',
            ease: 'none',
            scrollTrigger: {
                trigger: '.cta',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    }
}

// ========================================
// Navigation Scroll Effects
// ========================================
function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 15, 0.95)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        } else {
            nav.style.background = 'linear-gradient(to bottom, rgba(10, 10, 15, 0.9) 0%, transparent 100%)';
            nav.style.borderBottom = 'none';
        }
    }, { passive: true });
}

// ========================================
// Interactive Tilt Effect on Hero Image
// ========================================
function initHeroTilt() {
    // Removed - using fullscreen background now
}

// ========================================
// Magnetic Button Effect
// ========================================
function initMagneticButtons() {
    if (window.innerWidth < 992) return;

    document.querySelectorAll('.btn').forEach(btn => {
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
}

// ========================================
// Logo Dot Color Animation
// ========================================
function initLogoDot() {
    const logoDots = document.querySelectorAll('.logo-dot');
    let hue = 180;

    function animate() {
        hue = (hue + 0.5) % 360;
        const color = `hsl(${hue}, 100%, 60%)`;

        logoDots.forEach(dot => {
            dot.style.background = `linear-gradient(135deg, ${color} 0%, hsl(${(hue + 60) % 360}, 100%, 50%) 100%)`;
        });

        requestAnimationFrame(animate);
    }
    animate();
}

console.log('%cPXL Clock', 'font-size: 24px; font-weight: bold; color: #00f0ff;');
console.log('%cTime, Reimagined in Pixels', 'font-size: 14px; color: #8a8a9a;');

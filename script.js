// Modal functionality
const modal = document.getElementById('contactModal');

function openContactModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

/**
 * Function to close a contact modal dialog
 * This function handles both hiding the modal and re-enabling scrolling on the page
 */
function closeContactModal() {
    modal.style.display = 'none';  // Hide the modal by setting its display style to none
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeContactModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeContactModal();
    }
});

// Enhanced smoke animation
function createSmokeParticle() {
    const smokeContainer = document.querySelector('.smoke-container');
    const smoke = document.createElement('div');
    smoke.classList.add('smoke');

    // Random positioning
    const leftPos = Math.random() * 100;
    smoke.style.left = leftPos + '%';

    // Random size variation
    const size = 200 + Math.random() * 200;
    smoke.style.width = size + 'px';
    smoke.style.height = size + 'px';

    // Random animation duration
    const duration = 12 + Math.random() * 8;
    smoke.style.animationDuration = duration + 's';

    smokeContainer.appendChild(smoke);

    // Remove particle after animation
    setTimeout(() => {
        smoke.remove();
    }, duration * 1000);
}

// Create new smoke particles periodically
setInterval(createSmokeParticle, 3000);

// Add scroll-based parallax effect to smoke
window.addEventListener('scroll', () => {
    const smokeElements = document.querySelectorAll('.smoke');
    const scrollY = window.scrollY;

    smokeElements.forEach((smoke, index) => {
        const speed = 0.2 + (index * 0.1);
        smoke.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// Add intersection observer for menu items animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all menu items
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

// Add smooth reveal animation for sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

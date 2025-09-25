// CampusMart JavaScript Functionality

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupScrollEffects();
    setupAnimations();
});

// Initialize the application
function initializeApp() {
    console.log('CampusMart initialized successfully!');
    updateStats();
    setupProductCarousel();
}

// Navigation functionality
function setActiveTab(tab) {
    // Remove active class from all buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    const clickedButton = event.target;
    clickedButton.classList.add('active');
    
    // Handle tab switching logic
    switch(tab) {
        case 'buy':
            showBuySection();
            break;
        case 'assignment':
            showAssignmentSection();
            break;
        case 'sell':
            showSellSection();
            break;
        default:
            console.log('Unknown tab:', tab);
    }
    
    // Add animation effect
    clickedButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        clickedButton.style.transform = 'scale(1)';
    }, 150);
}

// Show different sections based on navigation
function showBuySection() {
    console.log('Switching to Buy section');
    // Scroll to products section
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function showAssignmentSection() {
    console.log('Switching to Assignment section');
    // Highlight assignment features
    highlightAssignmentFeatures();
}

function showSellSection() {
    console.log('Switching to Sell section');
    // Scroll to services section
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Highlight assignment features
function highlightAssignmentFeatures() {
    const assignmentCard = document.querySelector('.service-card:nth-child(3)');
    if (assignmentCard) {
        assignmentCard.style.transform = 'scale(1.05)';
        assignmentCard.style.boxShadow = '0 25px 50px rgba(79, 172, 254, 0.3)';
        
        setTimeout(() => {
            assignmentCard.style.transform = 'scale(1)';
            assignmentCard.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        }, 2000);
    }
}

// Create Assignment functionality
function createAssignment() {
    // Show loading animation
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'CREATING...';
    button.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
    
    // Simulate assignment creation
    setTimeout(() => {
        button.textContent = 'ASSIGNMENT CREATED! ✓';
        button.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
        
        // Show success message
        showNotification('Assignment created successfully! Check your dashboard.', 'success');
        
        // Reset button after delay
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'linear-gradient(45deg, #00d4ff, #090979)';
        }, 3000);
    }, 1500);
}

// Product purchase functionality
function buyProduct(productName) {
    const button = event.target;
    const originalText = button.textContent;
    
    // Show loading state
    button.textContent = '🔄 Processing...';
    button.disabled = true;
    
    // Simulate purchase process
    setTimeout(() => {
        button.textContent = '✅ Added to Cart!';
        button.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
        
        // Show success notification
        showNotification(`${productName} has been added to your cart!`, 'success');
        
        // Update cart count (if you have a cart counter)
        updateCartCount();
        
        // Reset button
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
            button.disabled = false;
        }, 2000);
    }, 1000);
}

// View all deals functionality
function viewAllDeals() {
    showNotification('Redirecting to deals page...', 'info');
    
    // Simulate navigation with animation
    const dealsSection = document.querySelector('.deals-sidebar');
    if (dealsSection) {
        dealsSection.style.transform = 'scale(1.02)';
        setTimeout(() => {
            dealsSection.style.transform = 'scale(1)';
        }, 300);
    }
    
    // You would typically navigate to a deals page here
    console.log('Navigating to deals page...');
}

// View all products functionality
function viewAllProducts() {
    showNotification('Loading all products...', 'info');
    
    // Animate products grid
    const productsGrid = document.querySelector('.products-grid');
    if (productsGrid) {
        productsGrid.style.opacity = '0.7';
        productsGrid.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
            productsGrid.style.opacity = '1';
            productsGrid.style.transform = 'scale(1)';
        }, 500);
    }
    
    console.log('Loading all products...');
}

// Learn more functionality for services
function learnMore(service) {
    const serviceNames = {
        'buy': 'Buy Service',
        'sell': 'Sell Service',
        'assignment': 'Assignment Help Service'
    };
    
    const serviceName = serviceNames[service] || 'Service';
    showNotification(`Learning more about ${serviceName}...`, 'info');
    
    // Animate the service card
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
    
    console.log(`Learning more about ${service} service`);
}

// CTA button functionality
function startBuying() {
    showNotification('Welcome to CampusMart! Browse our products below.', 'success');
    
    // Scroll to products section
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function startSelling() {
    showNotification('Ready to sell? Contact us to get started!', 'info');
    
    // Animate the button
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}

// Footer link functionality
function showAbout() {
    showNotification('About Us page coming soon!', 'info');
}

function showPrivacy() {
    showNotification('Privacy Policy page coming soon!', 'info');
}

function showTerms() {
    showNotification('Terms of Service page coming soon!', 'info');
}

// Utility Functions

// Show notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(45deg, #e74c3c, #c0392b)';
            break;
        case 'info':
        default:
            notification.style.background = 'linear-gradient(45deg, #4facfe, #00f2fe)';
            break;
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// Update cart count (placeholder)
function updateCartCount() {
    // This would update a cart counter in the header
    console.log('Cart updated');
}

// Update stats with animation
function updateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isNumeric = /^\d+/.test(finalValue);
        
        if (isNumeric) {
            const numericValue = parseInt(finalValue.replace(/,/g, ''));
            animateNumber(stat, 0, numericValue, 2000);
        }
    });
}

// Animate numbers counting up
function animateNumber(element, start, end, duration) {
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    
    function run() {
        const now = new Date().getTime();
        const remaining = Math.max((endTime - now) / duration, 0);
        const value = Math.round(end - (remaining * range));
        
        // Format number with commas for large numbers
        const formattedValue = value > 999 ? value.toLocaleString() : value;
        element.textContent = formattedValue;
        
        if (value === end) {
            // Add final formatting
            if (end >= 1000) {
                element.textContent = end.toLocaleString();
            }
        }
        
        if (remaining > 0) {
            requestAnimationFrame(run);
        }
    }
    
    run();
}

// Setup scroll effects
function setupScrollEffects() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';}})})}
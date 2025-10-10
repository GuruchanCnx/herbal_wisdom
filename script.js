// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav ul');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.style.display = 'flex';
        }
    });
    
    // Smooth scrolling for anchor links
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
    
    // Download button functionality
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would trigger actual PDF generation
            // For now, it shows an alert explaining the functionality
            const buttonText = this.textContent;
            if (buttonText.includes('Complete Medicinal Plants Guide')) {
                alert('In a real implementation, this would generate and download a comprehensive 50+ page PDF guide with detailed information about all medicinal plants, preparation methods, safety guidelines, and senior health applications based on Chiang Mai University research.');
            } else if (buttonText.includes('Herbal Safety Reference Card')) {
                alert('In a real implementation, this would download a printable wallet-sized safety reference card with essential herb-drug interaction information and emergency contact details.');
            } else if (buttonText.includes('Traditional Preparation Methods')) {
                alert('In a real implementation, this would download a visual guide with step-by-step instructions for preparing teas, poultices, and other traditional remedies.');
            }
        });
    });
});

// Back to top functionality (if needed)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

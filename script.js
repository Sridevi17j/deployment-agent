function showFeatures() {
    const featuresSection = document.getElementById('features');
    const button = document.querySelector('.cta-button');
    
    if (featuresSection.style.display === 'none') {
        featuresSection.style.display = 'block';
        button.textContent = 'Hide Features';
        
        featuresSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    } else {
        featuresSection.style.display = 'none';
        button.textContent = 'Discover Features';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value;
    const button = event.target.querySelector('button');
    const originalText = button.textContent;
    
    if (!email) {
        alert('Please enter a valid email address');
        return;
    }
    
    button.textContent = 'Submitting...';
    button.disabled = true;
    
    setTimeout(() => {
        alert(`Welcome to FocusFlow! Your free trial account will be ready at ${email}`);
        event.target.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-in';
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        observer.observe(card);
    });
    
    document.querySelector('.hero').addEventListener('click', function(e) {
        if (e.target.classList.contains('cta-button')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });
});
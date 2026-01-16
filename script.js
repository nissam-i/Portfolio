
// Script.js - Neoform Interactions

// Contact Form Logic
const form = document.getElementById('contactForm');
const modal = document.getElementById('successModal');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate sending
        const button = form.querySelector('button');
        const originalText = button.innerText;

        button.innerText = 'TRANSMITTING...';
        button.style.opacity = '0.7';

        setTimeout(() => {
            // Show Success Modal
            modal.classList.add('active');

            // Reset Form and Button
            form.reset();
            button.innerText = originalText;
            button.style.opacity = '1';
        }, 1500);
    });
}

function closeModal() {
    modal.classList.remove('active');
}

// Close on outside click
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

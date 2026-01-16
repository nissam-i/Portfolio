
// Script.js - Neoform Interactions

// Contact Form Logic
const form = document.getElementById('contactForm');
const modal = document.getElementById('successModal');

if (form) {
    let submitted = false;

    // When iframe loads (submission complete), show modal
    document.getElementById('hidden_iframe').onload = function () {
        if (submitted) {
            const button = form.querySelector('button');
            modal.classList.add('active');
            form.reset();
            button.innerText = 'Send Message';
            button.style.opacity = '1';
            submitted = false; // Reset
        }
    };

    form.addEventListener('submit', (e) => {
        // Do NOT preventDefault(); let it submit to iframe
        submitted = true;

        const button = form.querySelector('button');
        button.innerText = 'TRANSMITTING...';
        button.style.opacity = '0.7';
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

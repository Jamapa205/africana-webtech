// Client-side Form Validation for Africana Web Platform

// Validate Contact Form
function validateContactForm(event) {
    if (event) event.preventDefault();

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    const successEl = document.getElementById('success-message');
    if (successEl) successEl.textContent = '';

    // Validate Name
    const nameEl = document.getElementById('name');
    const nameErrorEl = document.getElementById('name-error');
    if (nameEl && nameErrorEl) {
        const nameVal = nameEl.value.trim();
        const namePattern = /^[A-Za-z\s]+$/;
        if (nameVal === '') {
            nameErrorEl.textContent = 'Full Name is required.';
            isValid = false;
        } else if (!namePattern.test(nameVal)) {
            nameErrorEl.textContent = 'Name must contain only letters and spaces.';
            isValid = false;
        }
    }

    // Validate Email
    const emailEl = document.getElementById('email');
    const emailErrorEl = document.getElementById('email-error');
    if (emailEl && emailErrorEl) {
        const emailVal = emailEl.value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailVal === '') {
            emailErrorEl.textContent = 'Email address is required.';
            isValid = false;
        } else if (!emailPattern.test(emailVal)) {
            emailErrorEl.textContent = 'Please enter a valid email address.';
            isValid = false;
        }
    }

    // Validate Telephone
    const phoneEl = document.getElementById('telephone');
    const phoneErrorEl = document.getElementById('telephone-error');
    if (phoneEl && phoneErrorEl) {
        const phoneVal = phoneEl.value.trim();
        const phonePattern = /^[0-9+\s-]{7,15}$/;
        if (phoneVal === '') {
            phoneErrorEl.textContent = 'Telephone number is required.';
            isValid = false;
        } else if (!phonePattern.test(phoneVal)) {
            phoneErrorEl.textContent = 'Please enter a valid telephone number (7-15 digits).';
            isValid = false;
        }
    }

    // Validate Address
    const addressEl = document.getElementById('address');
    const addressErrorEl = document.getElementById('address-error');
    if (addressEl && addressErrorEl) {
        if (addressEl.value.trim() === '') {
            addressErrorEl.textContent = 'Address is required.';
            isValid = false;
        }
    }

    // Validate Message
    const messageEl = document.getElementById('message');
    const messageErrorEl = document.getElementById('message-error');
    if (messageEl && messageErrorEl) {
        if (messageEl.value.trim() === '') {
            messageErrorEl.textContent = 'Message is required.';
            isValid = false;
        }
    }

    if (isValid) {
        if (successEl) {
            successEl.textContent = 'Thank you! Your message has been sent successfully. We will get back to you shortly.';
        }
        const form = document.getElementById('contact-form');
        if (form) form.reset();

        if (typeof showToast === 'function') {
            showToast('Message sent successfully!');
        }
    }

    return isValid;
}

// Validate Newsletter Subscription
function validateNewsletter(event) {
    if (event) event.preventDefault();

    const emailInput = document.querySelector('#newsletter input[type="email"]');
    if (!emailInput) return false;

    const emailVal = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailVal === '' || !emailPattern.test(emailVal)) {
        if (typeof showToast === 'function') {
            showToast('Please enter a valid email address for newsletter subscription.');
        } else {
            alert('Please enter a valid email address.');
        }
        return false;
    }

    emailInput.value = '';
    if (typeof showToast === 'function') {
        showToast('Subscribed to Africana Newsletter successfully!');
    } else {
        alert('Thank you for subscribing to our newsletter!');
    }
    return true;
}

// Bind event handlers when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }

    const newsletterForm = document.querySelector('#newsletter button');
    if (newsletterForm) {
        newsletterForm.addEventListener('click', validateNewsletter);
    }
});

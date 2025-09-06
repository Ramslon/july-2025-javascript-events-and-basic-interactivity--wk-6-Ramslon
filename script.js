// script.js
// Handles all interactive features and form validation for the assignment

// --- Light/Dark Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    // Toggle a class on the body for dark mode
    document.body.classList.toggle('dark-mode');
    // Change button text based on mode
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Toggle Light/Dark Mode';
});

// --- Counter Game ---
let count = 0;
const counterBtn = document.getElementById('counter-btn');
const countSpan = document.getElementById('count');
counterBtn.addEventListener('click', () => {
    // Increment the count and update the display
    count++;
    countSpan.textContent = count;
});

// --- Collapsible FAQ Section ---
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Toggle visibility of the answer
        const answer = btn.nextElementSibling;
        answer.classList.toggle('visible');
    });
});

// --- Form Validation ---
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    let valid = true;

    // Name validation: must not be empty
    const name = form.name.value.trim();
    const nameError = document.getElementById('name-error');
    if (name === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation: basic regex
    const email = form.email.value.trim();
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Enter a valid email address.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation: at least 6 chars
    const password = form.password.value;
    const passwordError = document.getElementById('password-error');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    // Show success message if valid
    const formSuccess = document.getElementById('form-success');
    if (valid) {
        formSuccess.textContent = 'Form submitted successfully!';
        form.reset();
    } else {
        formSuccess.textContent = '';
    }
});

// --- Real-time Validation (optional) ---
form.name.addEventListener('input', () => {
    document.getElementById('name-error').textContent = form.name.value.trim() === '' ? 'Name is required.' : '';
});
form.email.addEventListener('input', () => {
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    document.getElementById('email-error').textContent = !emailPattern.test(form.email.value.trim()) ? 'Enter a valid email address.' : '';
});
form.password.addEventListener('input', () => {
    document.getElementById('password-error').textContent = form.password.value.length < 6 ? 'Password must be at least 6 characters.' : '';
});

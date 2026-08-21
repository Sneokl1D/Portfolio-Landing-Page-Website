document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let valid = true;

    inputs.forEach((field) => {
      if (!field.value.trim()) {
        valid = false;
        field.style.boxShadow = '0 0 0 2px orangered';
      } else {
        field.style.boxShadow = 'none';
      }
    });

    if (!valid) {
      status.textContent = 'Please fill in all required fields.';
      return;
    }

    // Placeholder success behavior — replace with a real fetch() call to
    // your backend or a form service (Formspree, EmailJS, etc.)
    status.textContent = "Thanks! Your message has been sent — I'll get back to you soon.";
    form.reset();
  });
});

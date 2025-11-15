// main.js — small utilities for the demo project

// set copyright years in multiple pages
(function setYear() {
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year-2')?.textContent = y;
  document.getElementById('year-3')?.textContent = y;
  document.getElementById('year-4')?.textContent = y;
  document.getElementById('year-5')?.textContent = y;
})();

// Simple signup form validation (client-side)
// The forms are "demo" only — no backend submission
document.addEventListener('DOMContentLoaded', function() {
  const signup = document.getElementById('signupForm');
  if (signup) {
    signup.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = signup.name?.value?.trim() || '';
      const email = signup.email?.value?.trim() || '';
      const pw = signup.password?.value || '';
      const out = document.getElementById('signup-msg');

      const errors = [];
      if (name.length < 3) errors.push('Name must be at least 3 characters.');
      if (!validateEmail(email)) errors.push('Enter a valid email address.');
      if (pw.length < 6) errors.push('Password must be at least 6 characters.');

      if (errors.length) {
        out.textContent = errors.join(' ');
        out.style.color = 'crimson';
      } else {
        out.textContent = 'Account created (demo).';
        out.style.color = 'green';
        // Clear form to simulate success
        // signup.reset();
      }
    });
  }

  const signin = document.getElementById('signinForm');
  if (signin) {
    signin.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = signin.email?.value?.trim() || '';
      const pw = signin.password?.value || '';
      const out = document.getElementById('signin-msg');
      const errs = [];
      if (!validateEmail(email)) errs.push('Enter a valid email.');
      if (pw.length < 6) errs.push('Password must be at least 6 characters.');

      if (errs.length) {
        out.textContent = errs.join(' ');
        out.style.color = 'crimson';
      } else {
        out.textContent = 'Signed in (demo).';
        out.style.color = 'green';
      }
    });
  }
});

// tiny email regex for demo validation
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

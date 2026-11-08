// 1) Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? 'Close' : 'Menu';
  });
}

// 2) Footer year
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();

// 3) Contact form: opens the visitor's email app with the message filled in.
//    Change YOUR_EMAIL to your real address (also change it in build notes / HTML pages).
const YOUR_EMAIL = 'hello@youragency.com';
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    if (!form.checkValidity()) {
      status.textContent = 'Please fill in your name, a valid email and a message.';
      return;
    }
    const d = new FormData(form);
    const subject = encodeURIComponent('Consultation request from ' + d.get('name'));
    const body = encodeURIComponent(
      'Name: ' + d.get('name') + '\nEmail: ' + d.get('email') +
      '\nWebsite: ' + (d.get('website') || 'n/a') +
      '\nInterested in: ' + d.get('service') + '\n\n' + d.get('message'));
    status.textContent = 'Opening your email app… If nothing opens, email us at ' + YOUR_EMAIL + '.';
    window.location.href = 'mailto:' + YOUR_EMAIL + '?subject=' + subject + '&body=' + body;
  });
}

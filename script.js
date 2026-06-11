/* ============================================================
   NAVIGATION — sticky shadow + mobile menu
   ============================================================ */
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const isOpen = mobileMenu.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.querySelectorAll('span')[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  hamburger.querySelectorAll('span')[1].style.opacity = isOpen ? '0' : '';
  hamburger.querySelectorAll('span')[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav__mobile a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
document.querySelectorAll('.faq-item__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    // Toggle current
    if (!isOpen) item.classList.add('open');
  });
});

// Open first FAQ by default
const firstFaq = document.querySelector('.faq-item');
if (firstFaq) firstFaq.classList.add('open');

/* ============================================================
   WORKFLOW ANIMATION (hero card)
   ============================================================ */
const steps = document.querySelectorAll('.workflow-step');
if (steps.length) {
  let current = 1;
  setInterval(() => {
    steps.forEach((s, i) => {
      s.classList.remove('workflow-step--active', 'workflow-step--done');
      if (i < current) s.classList.add('workflow-step--done');
      if (i === current) s.classList.add('workflow-step--active');
    });
    current = (current + 1) % steps.length;
  }, 1800);
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
const form = document.querySelector('.contact-form');
const successEl = document.querySelector('.form__success');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('.form__submit');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate async submission (replace with real endpoint)
  setTimeout(() => {
    form.style.display = 'none';
    if (successEl) successEl.style.display = 'flex';
  }, 900);
});

/* ============================================================
   SMOOTH ANCHOR SCROLLING with offset for sticky nav
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ============================================================
   PRICING CARD — highlight on hover
   ============================================================ */
document.querySelectorAll('.pricing-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    document.querySelectorAll('.pricing-card').forEach(c => {
      if (c !== card) c.style.opacity = '0.8';
    });
  });
  card.addEventListener('mouseleave', () => {
    document.querySelectorAll('.pricing-card').forEach(c => {
      c.style.opacity = '';
    });
  });
});

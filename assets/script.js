document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    const closeMenu = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Abrir menu'); toggle.textContent='☰'; };
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
      toggle.textContent = isOpen ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    document.addEventListener('click', e => { if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) closeMenu(); });
  }
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

  // Progressive reveal: only activate when the browser supports it; no scroll handler.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll('.section-heading, .service-card, .feature-image-wrap, .feature-copy, .project-card, .gallery-head, .gallery-card, .cta-inner');
    revealTargets.forEach((el, index) => { el.classList.add('reveal'); if (el.matches('.service-card,.project-card,.gallery-card')) el.classList.add('reveal-delay-' + (index % 3 + 1)); });
    document.documentElement.classList.add('js-reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, {rootMargin:'0px 0px -45px 0px', threshold:0.08});
    revealTargets.forEach(el => observer.observe(el));
  }

  // Portfolio filters
  const filters = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.gallery-card');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => { item.classList.remove('active'); item.setAttribute('aria-pressed','false'); });
    button.classList.add('active'); button.setAttribute('aria-pressed','true');
    const category = button.dataset.filter;
    cards.forEach(card => { card.hidden = category !== 'todos' && card.dataset.category !== category; });
  }));
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.classList.contains('active'))));

  // Image dialog on portfolio: native dialog keeps the interaction lightweight and keyboard-friendly.
  if (cards.length && 'HTMLDialogElement' in window) {
    const dialog = document.createElement('dialog');
    dialog.className = 'image-dialog';
    dialog.innerHTML = '<button type="button" class="image-dialog-close" aria-label="Fechar imagem">×</button><img alt=""><p></p>';
    document.body.append(dialog);
    const dialogImg = dialog.querySelector('img');
    const caption = dialog.querySelector('p');
    cards.forEach(card => {
      const img = card.querySelector('img');
      if (!img) return;
      card.setAttribute('tabindex','0'); card.setAttribute('role','button'); card.setAttribute('aria-label','Ampliar imagem: ' + (img.alt || 'projeto'));
      const open = () => { dialogImg.src = img.currentSrc || img.src; dialogImg.alt = img.alt; caption.textContent = card.querySelector('h3')?.textContent || img.alt; dialog.showModal(); };
      card.addEventListener('click', e => { e.preventDefault(); open(); });
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
    dialog.querySelector('.image-dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  }
});

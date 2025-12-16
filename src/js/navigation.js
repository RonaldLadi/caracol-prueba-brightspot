document.addEventListener('click', function (event) {
    const toggle = event.target.closest('.navigation__toggle');
    if (!toggle) return;
  
    const nav = toggle.closest('.navigation');
    if (!nav) return;
  
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
  
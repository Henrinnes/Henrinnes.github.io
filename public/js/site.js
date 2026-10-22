(function (document) {
  var root = document.documentElement;

  // Dark mode toggle: remembers the choice, otherwise follows the system setting
  var themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Mobile menu
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('#site-nav');
  if (menuToggle && nav) {
    var closeMenu = function () {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    };
    menuToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    // Escape closes the menu and puts focus back on the button
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        closeMenu();
        menuToggle.focus();
      }
    });
  }
})(document);

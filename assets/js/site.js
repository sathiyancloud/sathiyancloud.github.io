(function () {
  var storageKey = 'sathiyancloud-theme';
  var root = document.documentElement;

  function getStored() {
    try {
      return localStorage.getItem(storageKey);
    } catch (e) {
      return null;
    }
  }

  function setStored(value) {
    try {
      localStorage.setItem(storageKey, value);
    } catch (e) {
      /* ignore */
    }
  }

  function applyTheme(mode) {
    root.setAttribute('data-theme', mode);
    root.style.colorScheme = mode === 'dark' ? 'dark' : 'light';
  }

  function resolveInitial() {
    var stored = getStored();
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  applyTheme(resolveInitial());

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setStored(next);
        applyTheme(next);
      });
    }

    var navBtn = document.getElementById('nav-toggle');
    var nav = document.getElementById('site-nav');
    if (navBtn && nav) {
      navBtn.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('is-open');
        navBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        navBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      });
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('is-open');
          navBtn.setAttribute('aria-expanded', 'false');
          navBtn.setAttribute('aria-label', 'Open menu');
        });
      });
    }
  });
})();

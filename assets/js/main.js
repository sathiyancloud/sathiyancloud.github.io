(function () {
  var KEY = "sc-theme";

  var ICON_SUN =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  var ICON_MOON =
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.innerHTML = theme === "dark" ? ICON_SUN : ICON_MOON;
      btn.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  function initTheme() {
    try {
      var s = localStorage.getItem(KEY);
      if (s === "light" || s === "dark") {
        apply(s);
        return;
      }
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        apply("light");
      } else {
        apply("dark");
      }
    } catch (e) {
      apply("dark");
    }
  }

  initTheme();

  document.addEventListener("DOMContentLoaded", function () {
    var current = document.documentElement.getAttribute("data-theme") || "dark";
    apply(current);

    document.querySelectorAll(".js-year").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });

    var toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        try {
          localStorage.setItem(KEY, next);
        } catch (e) { /* ignore */ }
        apply(next);
      });
    }

    var navBtn = document.getElementById("nav-toggle");
    var nav = document.getElementById("site-nav");
    if (navBtn && nav) {
      navBtn.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        navBtn.setAttribute("aria-expanded", open ? "true" : "false");
        navBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("is-open");
          navBtn.setAttribute("aria-expanded", "false");
          navBtn.setAttribute("aria-label", "Open menu");
        });
      });
    }
  });
})();

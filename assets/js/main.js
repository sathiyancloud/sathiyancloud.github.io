(function () {
  var KEY = "sc-theme";

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";
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

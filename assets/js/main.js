(function () {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".js-year").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });

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

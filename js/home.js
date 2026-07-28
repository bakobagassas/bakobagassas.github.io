// home.js — small reveal animation for the route line signature element

document.addEventListener("DOMContentLoaded", function () {
  var path = document.querySelector(".route-path");
  if (!path) return;

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return;

  var length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          path.style.transition = "stroke-dashoffset 1.4s ease";
          path.style.strokeDashoffset = "0";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(path);

  path.addEventListener("transitionend", function () {
    path.style.strokeDasharray = "5 6";
  });
});

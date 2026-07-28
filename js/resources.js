// resources.js — small feedback when someone clicks a not-yet-ready card.
// Exposes window.PageInit.resources so transitions.js can (re)run it
// whenever this page is loaded or navigated to.

window.PageInit = window.PageInit || {};

window.PageInit.resources = function () {
  var cards = document.querySelectorAll(".resource-card[data-soon]");

  cards.forEach(function (card) {
    card.onclick = function () {
      var badge = card.querySelector(".coming-soon");
      if (!badge) return;
      badge.textContent = "Check back soon";
      setTimeout(function () {
        badge.textContent = "Coming soon";
      }, 1600);
    };
  });
};
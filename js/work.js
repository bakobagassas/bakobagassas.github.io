// work.js — handles the Experience / Projects / Skills / Résumé subtabs

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".subtab-btn");
  var panels = document.querySelectorAll(".subtab-panel");

  function activate(targetId) {
    panels.forEach(function (panel) {
      panel.classList.toggle("active", panel.id === targetId);
    });
    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute("data-target") === targetId;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    if (history.replaceState) {
      history.replaceState(null, "", "#" + targetId);
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activate(btn.getAttribute("data-target"));
    });
  });

  // open the tab matching the URL hash, if present
  var initial = window.location.hash.replace("#", "");
  if (initial && document.getElementById(initial)) {
    activate(initial);
  }
});

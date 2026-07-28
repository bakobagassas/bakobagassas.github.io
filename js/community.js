// community.js — accordion open/close for the Community page sections

document.addEventListener("DOMContentLoaded", function () {
  var triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach(function (trigger) {
    var panel = document.getElementById(trigger.getAttribute("aria-controls"));

    trigger.addEventListener("click", function () {
      var isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", isOpen ? "false" : "true");
      panel.style.maxHeight = isOpen ? "0px" : panel.scrollHeight + "px";
    });
  });

  // open the first accordion item by default
  if (triggers.length) {
    var first = triggers[0];
    var firstPanel = document.getElementById(first.getAttribute("aria-controls"));
    first.setAttribute("aria-expanded", "true");
    firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
  }
});

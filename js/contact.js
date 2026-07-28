// contact.js — front-end only for now. This validates and shows a
// confirmation message, but does not actually send anything anywhere yet.
//
// To make this real, pick one:
//   1) Formspree: set the <form> action to your Formspree endpoint and
//      remove the preventDefault() below, or
//   2) EmailJS: call emailjs.sendForm(...) inside the submit handler.
// Either works with this static file setup, no server needed.

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var success = document.getElementById("form-success");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // TODO: replace this block with a real Formspree or EmailJS call
    success.classList.add("visible");
    form.reset();
  });
});

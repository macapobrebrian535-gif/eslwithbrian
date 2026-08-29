// English with Brian — shared site behavior
// This runs on every page (linked at the bottom of each .html file).

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Highlight the current page in the nav (based on file name)
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });
});

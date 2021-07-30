(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('src-form');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  $(document).ready(function() {
    $('#toTopBtn').click(function() {
    $("html, body").animate({
    scrollTop: 0
    },);
    return false;
    });
});
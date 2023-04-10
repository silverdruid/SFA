$(document).ready(function() {
  setTimeout(function() {
    $('.main-fader').addClass('loader');
    // Once the container has finished, the scroll appears
    if ($('.main-fader').hasClass('loader')) {
      // It is so that once the container is gone, the entire preloader section is deleted
      $('#preloader').delay(9000).queue(function() {
        $(this).remove();
      });}
  }, 3000);});
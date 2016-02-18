$(document).ready(function() {
    /*This enables the tooltip popup of "Resume", "Linkedin", "Github", etc... when I hover over the respective icon */
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    // Select all tabs
    $('.nav-tabs li a').click(function (e){
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).tab('show');
    })




$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

});



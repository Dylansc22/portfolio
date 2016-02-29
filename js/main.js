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

/*When affixing the navbar to the top of the page, The element being affixed is being pulled out 
of the dom and positioned by our JS basically. Normally, the nav there would just take up the 
width of its parent, but it effectively doesn't have one once affixed. 
You'll need to set a width for the element manually. And this code does just that*/
/*Pulled from https://github.com/twbs/bootstrap/issues/6350*/
/*function affixWidth() {
    var affix = $('#affixeditem');
    var width = affix.width();
    affix.width(width);
}

$(document).ready(function () {

    affixWidth();

});*/

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



$(document).ready(function() {
    /*This enables the tooltip popup of "Resume", "Linkedin", "Github", etc... when I hover over the respective icon */
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    // Select all tabs
    $('.nav-tabs a').click(function (e){
        e.preventDefault()
        $(this).tab('show');
    })

/*enables all map behavior*/
mapboxgl.accessToken = 'pk.eyJ1IjoiZHlsYW5jIiwiYSI6Im53UGgtaVEifQ.RJiPqXwEtCLTLl-Vmd1GWQ';
var start = [-111.8, 32.7];
var end = [-77.50, 38];
var mapvar = new mapboxgl.Map({
//attributionControl: false,
container: 'mapid',
style: 'mapbox://styles/dylanc/cikb2yvtr00589fm13z417kdu',
center: start,
zoom: 9,

});
mapvar.doubleClickZoom.disable();
mapvar.scrollZoom.disable();
mapvar.dragPan.disable();
mapvar.touchZoomRotate.disable();

var isAtStart = true;

function fly() {
// depending on whether we're currently at point a or b, aim for
// point a or b
var target = isAtStart ? end : start;

// and now we're at the opposite point
isAtStart = !isAtStart;

mapvar.flyTo({
    // These options control the ending camera position: centered at
    // the target, at zoom level 9, and north up.
    center: target,
    zoom: 10,
    bearing: 0,

    // These options control the flight curve, making it move
    // slowly and zoom out almost completely before starting
    // to pan.
    speed: 0.012, // make the flying slow
    curve: 0.01, // change the speed at which it zooms out

    // This can be any easing function: it takes a number between
    // 0 and 1 and returns another number between 0 and 1.
    easing: function (t) {
        return t;
    }
});
}


$( document ).ready(function() {
  fly();
});


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



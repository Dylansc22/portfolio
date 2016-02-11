$(document).ready(function() {


/*Enables smooth scrolling between different anchors of my onepage portfolio*/
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
	/*$('body').css('display', 'none');
	$('body').fadeIn(2000);



	$('.link').click(function() {
	event.preventDefault();
	newLocation = this.href;
	$('body').fadeOut(2000, newpage);
	});
	function newpage() {
	window.location = newLocation;
	}*/


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


/*
//Removes any focus on a button after it was clicked
//I implemented this, because when you click on the resume Modal, it remains 'focused' and I either write this code in, or disable all focus css for that button. This was easier

function enterexit(e) {
    $("e.currentTarget").removeClass('entered').addClass('exited');
}


$("#writings").mouseenter(function(){
    $(Add).blur();
})

mouseenter(function(event) {
	$(addClass('mouseenterportfolio'))
});





*/











});



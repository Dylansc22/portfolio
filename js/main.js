$(document).ready(function() {

//Custom Theme JavaScript //
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#imagetest").mouseenter(function(e) {
        e.preventDefault();
        $("#imagetest").toggleClass("active");
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

/*This enables the tooltip popup of "Resume", "Linkedin", "Github", etc... when I hover over the respective icon */
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



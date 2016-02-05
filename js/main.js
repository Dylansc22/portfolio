$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Removes any focus on a button after it was clicked
//I implemented this, because when you click on the resume Modal, it remains 'focused' and I either write this code in, or disable all focus css for that button. This was easier
$(a).mouseup(function(){
    $(this).blur();
})
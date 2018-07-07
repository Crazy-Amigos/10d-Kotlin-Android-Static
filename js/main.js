$(document).ready(function(){

	$(".menu-icon").click(function(){
		$(".nav-list").toggleClass("selected");
	});

	$(".nav-list").click(function(){
		$(this).toggleClass("selected");
	});

	$(document).on('click', '.nav', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
	});


});
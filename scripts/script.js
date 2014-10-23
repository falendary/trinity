$(document).ready(function(){
	if($(".contacts-button").hasClass('active'))
		$('body').css("background-color","rgba(30,91,125,1)");
	else if ($('.projects-button').hasClass('active'))
		$('body').css("background-color","rgba(78, 175, 44,1)");
	else if ($('.about-button').hasClass('active'))
		$('body').css("background-color","rgba(213,162,51,1)");

	$(".projects").onepage_scroll();
});

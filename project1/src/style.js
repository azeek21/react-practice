import $ from "jquery"


// Trying things with jquery, it's fun lol
$(document).ready(function(){
	console.log('ready');
});

$(document).scroll(() => {
	if ($(document).scrollTop() >= 10) {$('header').addClass('transparent_header')} 
	else $('header').removeClass('transparent_header');
});

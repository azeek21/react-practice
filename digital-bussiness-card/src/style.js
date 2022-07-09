import $ from "jquery"

$(document).ready(() => {
	let isDark = 1;
	$(".contacts-item").hover(function () {
		let cur = $(this).find(".contacts-item__icon");
		let add = isDark ? 'svg-white' : 'svg-black'
		let rem = isDark ? 'svg-black' : 'svg-white'
		$(cur).addClass(add);
		$(cur).removeClass(rem);
		$(this).mouseleave(function () {
			let current = $(this).find(".contacts-item__icon");
			$(current).removeClass(add);
			$(current).addClass(rem);
		});
	});

	$('.social-img').hover(function () {
		$(this).addClass('svg-blue');
	});

	$('.social-img').mouseleave(function () {
		$(this).removeClass('svg-blue');
	});

});

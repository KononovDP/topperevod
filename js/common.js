$(document).ready(function() {

	var scrollTop = $(window).scrollTop();

	//lock/unlock body scroll
	function lockBody() {
		if($(window).scrollTop()) {
		 	scrollTop = $(window).scrollTop();
		 	$('.wrapper').css({
		 		top: - (scrollTop)
		 	});
		}
		$('html,body').css({height: "100%", overflow: "hidden"});
	}
	function unlockBody() {
		$('html,body').css({height: "", overflow: ""});
		$('.wrapper').css({
			top: ''
		});
		window.scrollTo(0, scrollTop);
		window.setTimeout(function () {
			scrollTop = null;
		}, 0);
	};
	
	$('.burger-menu').on('click' , function() {
		$(this).toggleClass('active');
		$('.header-center-outer').toggleClass('visible');

	});
	
	$('.show-popup').on('click' , function() {
		lockBody();
		$('.popup-overlay').fadeIn(300);
		return false;
	});

	$(document).on('click' , 'body' , function(event) {
		if ($(event.target).closest(".popup").length) return;
		$(".popup-overlay").fadeOut(300);
		unlockBody();
		event.stopPropagation();
	});

}); 
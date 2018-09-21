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
	
	//object-fit polyfill
	objectFitImages('.cover-img .image');

	$('.burger-menu').on('click' , function() {
		$(this).toggleClass('active');
	});
	

}); 
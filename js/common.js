$(document).ready(function() {
	var scrollTop = $(window).scrollTop(),
		windowWidth = $(window).width();
	
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
		$('.header-center').toggleClass('visible');
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

	if(windowWidth <= 1024) {
		$('.has-child .nav-link').click(function(e) {
			e.preventDefault();
			
			var $this = $(this);
			
			if ($this.next('.sec-menu').hasClass('show')) {
				$this.removeClass('active');
				$this.next('.sec-menu').removeClass('show');
				$this.next('.sec-menu').slideUp(300);
			} else {
				$('.has-child .nav-link').removeClass('active');
			    $('.sec-menu').removeClass('show');
			    $('.sec-menu').slideUp(300);
				$this.addClass('active');
			    $this.next('.sec-menu').toggleClass('show');
			    $this.next('.sec-menu').slideToggle(300);
			}
		});
	};

	$('.header-tablet .close').on('click' , function() {
		$(this).closest('.header-tablet').slideUp(300);
		return false;
	});
}); 


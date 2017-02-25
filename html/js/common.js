$(function() {

	//Адаптивный слайдер

	$(".characteristics__slider").owlCarousel({
		loop: true,
		items: 1,
		nav:true,
		navText: '',
	});

	$(".reviews__slider").owlCarousel({
		loop: true,
		items: 1,
		nav:true,
		navText: '',
		autoHeight: true,
	});

	//Выравнивание блоков по высоте

	$(".about__item-title h3").equalHeights();
	$(".advantages__item-title h3").equalHeights();

	//popup

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 1000);
		});
		return false;
	});
	$('.callback').on('submit', function(){
		if ( $(this).find('input').val() ) {
			alert('Ваша заявка получена, наш специалист скоро перезвонит.');
		}
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(function () {

	// FIXED HEADER 
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function () {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH)
	});

	function checkScroll() {
		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	// SMOOTH SCROLL
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	});

	// NAV TOGGLE
	navToggle.on('click', function (event) {
		event.preventDefault();

		nav.toggleClass("show");
	});

	// REVIEWS https://kenwheeler.github.io/slick/
	let slider = $("#reviewsSlider");

	slider.slick({
		infinite: true, // Постоянный скролл элементов
		slidesToShow: 1, // кол-во слайдов
		slidesToScroll: 1, // сколько скролится слайдов при клике
		fade: true, // затемнение при скроле(true - затемнение\false - пролистывание)
		arrows: false, // скрытие\открытие кнопочек (стили прикручиваются по классу)
		dots: true // скрытие\ открытие точек, показывающие кол-во слайдов (стили прикручиваются по классу)
	});
});
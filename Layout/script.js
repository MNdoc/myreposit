$(document).ready(function () {

	let header = $("#header"),
		introHeight = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();

	checkHeight(scrollOffset);

	// check scroll for fix header

	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();
		checkHeight(scrollOffset);
	});

	function checkHeight(scrollOffset) {

		if (scrollOffset > introHeight) {
			header.addClass("fix");
		} else {
			header.removeClass("fix");
		};
	};

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let $this = $(this),
			sectionId = $(this).data('scroll'),
			sectionOffset = $(sectionId).offset().top;

		$("a[data-scroll]").removeClass('active');
		$this.addClass('active');

		$("html, body").animate({
			scrollTop: sectionOffset
		}, 400);

	});

	//nav mobile
	$('#nav_mobile').on('click', function (ev) {
		ev.preventDefault();
		$('.nav-mobile').toggleClass('active');

		$('#nav').slideToggle(400);
	});

	$('#nav_mobile').focusout(function (ev) {
		ev.preventDefault();
		$('.nav-mobile').toggleClass('active');

		$('#nav').slideToggle(400);
	});

	//accordion	
	$('#arrow_a' && '#accordin_header_a').on('click', function (ev) {
		ev.preventDefault();
		$('#accordion_item_a').toggleClass('active');
	});
	$('#arrow_b' && '#accordin_header_b').on('click', function (ev) {
		ev.preventDefault();
		$('#accordion_item_b').toggleClass('active');
	});
	$('#arrow_c' && '#accordin_header_c').on('click', function (ev) {
		ev.preventDefault();
		$('#accordion_item_c').toggleClass('active');
	});

	//worlds slider
	$('.words_btn.prev').on('click', function (ev) {
		ev.preventDefault();
		$('.words_item').prev().css('display', 'block');
		$('.words_item').next().css('display', 'none');
	});
	$('.words_btn.next').on('click', function (ev) {
		ev.preventDefault();
		$('.words_item').next().css('display', 'block');
		$('.words_item').prev().css('display', 'none')
	});



	//map 
	$('.map_item').on('click', function (ev) {
		ev.preventDefault();
		$('.map_item').css('background', 'none');
		$('.map').fadeIn(200);
	});
	$('.map_item').focusout(function (ev) {
		ev.preventDefault();
		$('.map_item').css('background', 'center / cover no-repeat padding-box url(img/map.jpg)');
	});

});
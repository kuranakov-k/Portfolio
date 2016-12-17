$(document).ready(function() {
	
	$('.cube__text').mouseover(function() {
		$(this).next($(".cube__link")).addClass("js-current");
	});

	$('.cube__link').mouseover(function() {
		$(this).addClass("js-current");
	});

	$('.cube__link').mouseleave(function() {
		$(this).removeClass("js-current");
	});

	$("#owl-carousel").owlCarousel({
		items: 4,
		autoPlay: false,
		navigation: true,
		responsive: false,
		pagination: false,
		navigationText: "",
		loop: false
	});

	$("#owl-carousel__party").owlCarousel({
		items: 1,
		autoPlay: false,
		navigation: true,
		responsive: false,
		pagination: false,
		navigationText: "",
		loop: false
	});

	$("#owl__djs").owlCarousel({
		items: 1,
		autoPlay: false,
		navigation: true,
		responsive: false,
		pagination: true,
		navigationText: "",
		loop: false
	});

	//////////////////////////
	// pic
	//////////////////////////
	var count = 0;
	var photoUrl;
	$(".party__link").on("click", function(e) {
		e.preventDefault();
		count = count + 1;
		console.log(count);
		photoUrl = $(this).attr("href");
		$(".owl-wrapper__party").hide();
		$(".content__title").hide();
		$(".b-photo__item").show().attr("src", photoUrl);
	});
		console.log(count);
		
			$(".l-cube__back").on("click", function(e) {
				if (count == 1) {
					e.preventDefault();
					$(".b-photo__item").hide();
					$(".owl-wrapper__party").show();
					$(".content__title").show();
					count = count - 1;
					console.log(count);
				}
		});
		
		
});
$("#about_link").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});

	$("#portfolio_link").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});

$("#contact_link").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});

	$("#skills_link").click(function(e) {
		e.preventDefault();
		$('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});



$(document).ready(function() {
  $("#up").hide();
  $(window).scroll(function() {
  	var scrollTop = $(window).scrollTop();
  	if (scrollTop > 300) {
		$("#up").show();
	}
		else {
			$("#up").hide();
		} 
  });
  $("#up").click(function() {
		$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
			}, 300);
			return false;
		});
});  


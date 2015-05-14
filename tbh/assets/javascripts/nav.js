$(function() {
  /* current */
	$('nav p').css({
		width: $('nav .current').outerWidth(),
		left: $('nav .current').position().left
	});
  /* mouseover */
	$('nav a').mouseover(function(){
		$('nav p').stop().animate({
			width: $(this).outerWidth(),
			left: $(this).position().left}
		,'fast');
	});
  /* mouseout */
	$('nav a').mouseout(function(){
		$('nav p')
			.stop()
			.animate({
				width: $('nav .current').outerWidth(),
				left: $('nav .current').position().left}
			,'fast');
	});
})

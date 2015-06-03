$(function() {
  /* current */
	$('.nav-wripper p').css({
		width: $('.nav-wripper .current').outerWidth(),
		left: $('.nav-wripper .current').position().left
	});
  /* mouseover */
	$('.nav-wripper a').mouseover(function(){
		$('.nav-wripper p').stop().animate({
			width: $(this).outerWidth(),
			left: $(this).position().left}
		,'fast');
	});
  /* mouseout */
	$('.nav-wripper a').mouseout(function(){
		$('.nav-wripper p')
			.stop()
			.animate({
				width: $('.nav-wripper .current').outerWidth(),
				left: $('.nav-wripper .current').position().left}
			,'fast');
	});
})

$(function() {
	// bx슬라이더
	/*$('div[id*=bxBox-] .bxS').bxSlider({
		mode: 'fade',
		auto:true,
		speed: 500,
		duration: 3000,
		prevText: '<img src='http://img.gobs.co.kr/main_slide_prev_btn.png' alt='이전'>',
		nextText: '<img src='http://img.gobs.co.kr/main_slide_next_btn.png' alt='다음'>',
	});*/
	
	$('#navTab').on('click', function() {
		$(this).toggleClass('active');
		$('#gNav').toggleClass('active');
	});
});
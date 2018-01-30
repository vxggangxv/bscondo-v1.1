$(function() {
	// 단체문의 팝업
	$("#main .popOpen").on('click', function () {

		var thisObj = $(this);
		//var popTop = thisObj.offset().top;
		var popTop = $(window).scrollTop() + 50;


		$('#contact-pop').css("top", popTop);
		$('#contact-pop, #contact-bg').show();

	});
	
});
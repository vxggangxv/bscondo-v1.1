$(function () {
	// 네비게이션 탭
	$('#navTab').on('click', function () {
		$(this).toggleClass('active');
		$('#gNav').toggleClass('active');
	});

	$(window).on('scroll', function () {
		var scr = $(window).scrollTop();
		// var setTop =	$("#setTop").offset().top;
		var setTop = 220;

		if (scr < setTop) {
			$("#goTop").fadeOut();
			$(".header").removeClass('shadow');
		}
		if (scr >= setTop) {
			$("#goTop").fadeIn();
			$(".header").addClass('shadow');
		}
	});

	//페이지네이션
	$("#pagenation a").on("click", function () {
		var idx = $(this).index();
		var lastIdx = $(this).closest("div").find("a").length;
		lastIdx--;
		//console.log(lastIdx);
		if (idx != 0 && idx != lastIdx) {
			$(this).addClass("on").siblings().removeClass("on");
		}
		event.preventDefault();
	});
});

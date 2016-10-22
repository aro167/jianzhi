$(document).ready(function(){
	$("nav>ul>li").mouseover(function(){
		if($(this).hasClass("active")){
			return;
		}
		var oldActive = $('.active');
		oldActive.removeClass('active');
		$(this).addClass('active');
	});
	$(".search").click(function(){
		$("nav>ul>li").each(function(){
			$(this).addClass("animated fadeOutLeft");
		});

		setTimeout(function(){
			$('#dowebok').removeClass('bounce');
		}, 2000);
		$('.search').hide();
		$('.inputdis').show();
	});
	$(".xxx").click(function(){
		$('#dowebok').addClass('bounce');
		$("nav>ul>li").each(function(){
			$(this).removeClass("animated fadeOutLeft");
			$(this).addClass("animated fadeInLeft");
		});


		$('.search').show();
		$('.inputdis').hide();
	});
});



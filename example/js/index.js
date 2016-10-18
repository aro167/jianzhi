var mySlide = new Slide({
				el: 'wrapper',
				// index: 2,
				pointClass: 'pointIndex',
				pointEvent: 'mouseover',
				auto: true,
				delay: 2000,
				duration: 500,
				easing: 'easeInOut'
});
$(function(){
	TouchSlide({ slideCell:"#tabBox1" ,effect:"leftLoop",autoPlay:true,delay: 3000,});
})
$(document).ready(function(){
	$("nav>ul>li").mouseover(function(){
		if($(this).hasClass("active")){
			return;
		}
		var oldActive = $('.active');
		oldActive.removeClass('active');
		$(this).addClass('active');
	});

	$(".desc3").mouseover(function(){
		$(".desc4").show();
	});
	$(".desc3").mouseout(function(){
		$(".desc4").hide();
	});
	$(".showSearch").click(function(){
		$(".showSearch").css({"background":none});
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
	$(window).scroll(function () {
		if ($(window).scrollTop() > $('.section6').offset().top-200) {
		$('#d1s').addClass("animated rubberBand");
		$('#d2s').addClass("animated rubberBand");
		$('#d3s').addClass("animated rubberBand");
		
		}
	});
	
	$(window).scroll(function () {
	if ($(window).scrollTop() > $('.section6').offset().top ||$(window).scrollTop() < $('.section5').offset().top-200) {
		$('.desc1').removeClass("desc1L");
		}
		
		
		if ($(window).scrollTop() > $('.section5').offset().top-200 && $(window).scrollTop() < $('.section6').offset().top) {
		$('.desc1').addClass("desc1L");
		}
	});
	
	$(window).scroll(function () {
	if ($(window).scrollTop() > $('.section5').offset().top || $(window).scrollTop() < $('.section4').offset().top-400) {
		$('#biaodai1').removeClass("img16L");
		$('#biaodai2').removeClass("img15L");
		$('#biaodai3').removeClass("img18L");
		$('#biaodai4').removeClass("img17L");
		}
		if ($(window).scrollTop() > $('.section4').offset().top-200 && $(window).scrollTop() < $('.section5').offset().top) {
		$('#biaodai1').addClass("img16L");
		setTimeout(function(){
		    $('#biaodai2').addClass("img15L");
		}, 1000);
		setTimeout(function(){
		    $('#biaodai3').addClass("img18L");
		}, 1500);
		setTimeout(function(){
		    $('#biaodai4').addClass("img17L");
		}, 500);
		}
	});
	
		
});



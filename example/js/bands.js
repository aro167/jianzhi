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
	
	$(".bands-color img").mouseover(function(){
		if($("#"+ $(this).attr("data-tab")).hasClass("imgshow")){
			return;
		}
		var oldshow = $("."+$(this).attr('class')+" .imgshow").removeClass("imgshow").addClass("imghide");
		$("#" + $(this).attr("data-tab")).removeClass("imghide").addClass("imgshow");
		
	});
	$("#redniupi").mouseover(function(){
		$('.changePrice').html("899");
	});
	$("#heiniupi").mouseover(function(){
		$('.changePrice').html("799");
	});
	$("#kaniupi").mouseover(function(){
		$('.changePrice').html("799");
	});
	
});



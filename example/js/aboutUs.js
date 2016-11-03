// JavaScript Document
$(function(){
	TouchSlide({ slideCell:"#tabBox1" ,effect:"leftLoop",autoPlay:true,delay: 3000,});
	$("nav>ul>li").mouseover(function(){
		if($(this).hasClass("active")){
			return;
		}
		var oldActive = $('.active');
		oldActive.removeClass('active');
		$(this).addClass('active');
	});
	//wanbiao
	$(".watch_list,.watchMenu").on("mousemove",function(){
		$(".watchMenu").show();
	});
	$(".watch_list").on("mouseout",function(){
		$(".watchMenu").hide();
	});
	$(".search").click(function(){
		$("nav>ul>li").each(function(){
			$(this).addClass("animated fadeOutLeft");
		});
		$('.search').hide();
		$('.inputdis').show();
		setTimeout(function(){
			$(".showSearch").focus();
		}, 1000);
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
	/*$(".closeSearch").on('click',function(){
		if($(".showSearch").val() != ""){
			$("nav>ul>li").each(function(){
				$(this).removeClass("animated fadeOutLeft");
			});
			
			$('.search').show();
			$('.inputdis').hide();
		}
		
	});
	$(".showSearch").on('blur',function(){
		$("nav>ul>li").each(function(){
			$(this).removeClass("animated fadeOutLeft");
		});
		
		$('.search').show();
		$('.inputdis').hide();
	});*/
	//搜索按钮
	$(".searchAddress").on('click',function(){
		$('.searchBox').show();
	});
	$(".searchAddress").on('keyup',function(){
		$('.default').hide();
		$('.searchResult').show();
	});
	$(".aboutWatch").css('margin-top',$(window).width()*0.131-160);
	
	/*$(".menuList li").on('click',function(){
		
	});*/
})
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
	$("nav>ul>li").not(".watchMenu").mouseover(function(){
		$(".watchMenu").hide();
	});
	$(".watch_list,.watchMenu").on("mouseenter",function(){
		$(".watchMenu").show();
	})	
	$(".watchMenu").hover(function(){ 
		$(".watchMenu").show();
		},
		function(){
		 $(".watchMenu").hide();
		}
	   );
	
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
	//搜索按钮
	$(".searchAddress").on('click',function(){
		$('.searchBox').show();
	});
	$(".searchAddress").on('keyup',function(){
		$('.default').hide();
		$('.searchResult').show();
	});
	$(".aboutWatch").css('margin-top',$(window).width()*0.131-160);
	$(".watchParts .watchList li").on('mouseover',function(){
		var width=$(this).children("img").width();
		$(this).children("img").width(width*1.2);
		$(this).children(".partTntro").show();
		$(this).siblings().children(".partTntro").hide();
		//$(this).css("margin-top",'-10px');
		/*$(this).prevAll().addClass("move-left");
		$(this).nextAll().addClass("move-right");*/
		/*$(this).addClass("scale");*/
	});
	$(".watchParts .watchList li").on('mouseout',function(){
		var width=$(this).children("img").width();
		$(this).children("img").width(width/1.2);
		/*$(this).prevAll().removeClass("move-left");
		$(this).nextAll().removeClass("move-right");
		$(this).removeClass("scale");*/
	});
	/*新增*/
	$(".watchParts .watchList li.small_pic").on('mouseover',function(){
		var width=$(".big_pic").children("img").width();
		$(".big_pic").children("img").width(width*1.2);
		$(".big_pic").children(".partTntro").show();
		$(".big_pic").siblings().children(".partTntro").hide();
	});
	$(".watchParts .watchList li.small_pic").on('mouseout',function(){
		var width=$(".big_pic").children("img").width();
		$(".big_pic").children(".partTntro").hide();
		$(".big_pic").children("img").width(width/1.2);
	});
	/*新增结束*/
	$(".watches img").live('click',function(){
		var index=$(this).index();
		var intro=$(".watches p span:eq("+index+")").html();
		var bigwatch = $(".watchLeft img:eq(0)");
		$(this).after(bigwatch);
		$(this).prependTo($(".watchLeft"));
		$(".watches p span:eq("+index+")").html($(".watchRight_tit").text());
		$(".watchRight_tit").html(intro);
		$(".watchPri").html($(this).attr("price"));
	});
	/*$(".menuList li").on('click',function(){
		
	});*/
})
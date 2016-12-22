$(function(){
	var icon_a  = $("#icon-a"),
		cehua_a = $(".cehua-a"),
		a       = true,
		footer  = $(".footer"),
		font    = $(".font"),
		aaa     = $(".aaa");
//	首页右拉框 
//	body.on("touchend",function(){
//		icon_a.css('color','#fff')
//			cehua_a.css({"transform":"translateX(2rem)","opacity":"0"});
//	})
//	$(document).on('touchend',function(){
//		icon_a.css('color','#fff');
//		cehua_a.css({"transform":"translateX(2rem)","opacity":"0"});
//	});
	icon_a.on("touchend",function(){
		
		if(a){
			icon_a.css('color','#FFCB0A')
			cehua_a.css({"transform":"translateX(0)","opacity":"1"});
			a = !a
		}else{
			a = !a;
			icon_a.css('color','#fff')
			cehua_a.css({"transform":"translateX(2rem)","opacity":"0"});
		}
		
	})
//	底部选项卡
$(".footer").on("touchend",function(){
		$(".aaa").css("display","block");
		$(".font").css("display","none");
		$(this).find(".aaa").css("display","none");
		$(this).find(".font").css("display","block")
	})
	
	
	
})

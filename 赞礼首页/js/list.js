// JavaScript Document
$(document).ready(function(){
	/*筛选*/
	$(".pinpaileft a").each(function(){
		$(this).find("span").hide();
		$(this).mouseover(function(){
			$(this).find("span").show().siblings("img").hide();
			}).mouseout(function(){
				$(this).find("img").show().siblings("span").hide();
				});
		});
	$(".pinpaimore span").eq(0).show().siblings("span").hide();
	$(".pinpaileft").css("height","107px");
	$(".pinpaimore span").click(function(){
		if($(".pinpaileft").css("height","107px")){
			$(".pinpaileft").css("height","100%");
			$(".pinpaimore span").eq(1).show().siblings("span").hide();
			}
		});
	$(".pinpaimore span").eq(1).click(function(){
		$(".pinpaileft").css("height","107px");
		$(this).hide().siblings("span").show();
		});
	
	$(".jiage a").click(function(){
		$(this).addClass("current").siblings("a").removeClass("current");
		});
	
});
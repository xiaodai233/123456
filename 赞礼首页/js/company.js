// JavaScript Document
$(document).ready(function(){
	/*banner*/
	$(".changespan").css("left",(screen.width-880)/2+"px");
	$(".changespan span").eq(0).addClass("current");	
	$(".changeimg div").eq(0).show().siblings("div").hide();
	$(".changespan span").mouseover(function(){
		numa=$(this).index();
		$(this).addClass("current").siblings("span").removeClass("current");
		$(".changeimg div").eq(numa).fadeIn().siblings("div").fadeOut();
		});
	setInterval(function(){
		var a=$(".changespan .current").index();
		var b=$(".changespan span:last").index();
		if(a==b){
			$(".changespan span").eq(0).trigger("mouseover");
			}
			$(".changespan span").eq(a+1).trigger("mouseover");
		},5000);
		
	$(".comcon dl").each(function(){
		$(this).find(".comconmore").hide();
		$(this).mouseover(function(){
			$(this).find(".comconmore").show();
			}).mouseout(function(){
				$(this).find(".comconmore").hide();
				});
		});	
		
});
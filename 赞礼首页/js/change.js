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
	
	/*查看更多兑换*/
	$(".others").each(function(){
		$(this).hide();
		});
	$(".more2").each(function(){
		$(this).hide();
		});
	$(".more").each(function(){
		$(this).click(function(){
			$(this).siblings(".salebg1").find(".others").show();
			$(this).hide().siblings(".more2").show();
			});
		});
});
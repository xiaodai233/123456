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
		
	/*经过产品，出现产品名称*/
	$(".changepro dl").each(function(){
		$(this).find("dd").hide();
		$(this).mouseover(function(){
			$(this).find("dd").show();
			}).mouseout(function(){
				$(this).find("dd").hide();
				});
		});
		
	/*右侧导航*/
	var kuan=$(window).width();
	var gao=$(window).height();
	kuana=Math.ceil((kuan-1190)/2-153);
	gaoa=Math.ceil((gao)/2-60);
	$(".lead").css("right",kuana);
	$(".lead").css("top",gaoa);
	$(".lead li img").eq(0).show().siblings("img").hide();
	$(".lead li").mouseover(function(){
		$(this).find("img").eq(1).show().siblings("img").hide();
		}).mouseout(function(){
			$(this).find("img").eq(0).show().siblings("img").hide();
			});
	$(".leadtop").click(function(){
		$(".lead").hide();
		});
	
	/*滚动出现小导航*/
	function GetPageScroll(){
		var x, y; 
		if(window.pageYOffset){
			y = window.pageYOffset;   
			x = window.pageXOffset;
			}else if(document.documentElement && document.documentElement.scrollTop){
				y = document.documentElement.scrollTop;   
				x = document.documentElement.scrollLeft;}else if(document.body){   
					y = document.body.scrollTop;   
					x = document.body.scrollLeft;  
		}
		var gao=window.screen.height;
		mm=$(".diyi").offset();
		up=mm.top-gao/2;
		if(y>up){$(".lead").show();}
		if(y<up){$(".lead").hide();}
		return {X:x, Y:y};
	} 
	$(function(){
		document.onmousewheel=wheel;
		document.addEventListener('DOMMouseScroll',wheel,false);
	});
	function wheel(){
		GetPageScroll();
	}
});
// JavaScript Document
$(document).ready(function(){
	/*频道页banner start*/
	$(".nybanspan").css("left",(screen.width-90)/2+"px");
	$(".nybanspan span").eq(0).addClass("current");	
	$(".nybanimg div").eq(0).show().siblings("div").hide();
	$(".nybanspan span").mouseover(function(){
		numa=$(this).index();
		$(this).addClass("current").siblings("span").removeClass("current");
		$(".nybanimg div").eq(numa).fadeIn().siblings("div").fadeOut();
		});
	setInterval(function(){
		var a=$(".nybanspan .current").index();
		var b=$(".nybanspan span:last").index();
		if(a==b){
			$(".nybanspan span").eq(0).trigger("mouseover");
			}
			$(".nybanspan span").eq(a+1).trigger("mouseover");
		},5000);
	/*频道页banner end*/
		
	/*三级导航 start*/
	$(".sanji").css("left",(screen.width-1206)/2+"px");
	$(".sanjicon>dl").mouseover(function(){
		names=$(this).attr("name");
		$(this).addClass("current");
		$(".sanji").find("."+names).show();
		offset=$(this).offset();
		$("."+names).css({"top":(offset.top-291)+"px","left":(offset.left-157)+"px"});
		$("."+names).mouseover(function(){
			$(this).show();
			$(".sanjicon>dl[name="+names+"]").addClass("current");
			}).mouseout(function(){
				$(this).hide();
				$(".sanjicon>dl[name="+names+"]").removeClass("current");
				})
	}).mouseout(function(){
		$(this).removeClass("current");
		names=$(this).attr("name");
		$(".sanji").find("."+names).hide();
		});
	$(".tuijian").css("right",(screen.width-1206)/2+"px");
	/*三级导航 end*/
	
	/*抢购倒计时*/
	function fresh(){
		var endtime=new Date("2015/02/02,12:59:59");
		var nowtime = new Date();
		var leftsecond=parseInt((endtime.getTime()-nowtime.getTime())/1000);
		d=parseInt(leftsecond/3600/24);
		h=parseInt((leftsecond/3600)%24);
		m=parseInt((leftsecond/60)%60);
		s=parseInt(leftsecond%60);
		$(".buyingtime").remove();
		$(".buyingprice").after("<dd class='buyingtime over'><strong></strong><span>剩余<i>"+d+"</i>天<i>"+h+"</i>小时<i>"+m+"</i>分<i>"+s+"</i>秒</dd>");
		if(leftsecond<=0){
			$(".buyingtime").remove();
			$(".buyingprice").after("<dd class='buyingtime over'><strong></strong><p>抢购已结束</p></dd>");
			clearInterval(sh);
			}
		}
		fresh()
		var sh;
		sh=setInterval(fresh,1000);
	
	/*快点抢*/
	$(".buyingcon").mouseover(function(){
		$(".buyingzuo").show();
		$(".buyingyou").show();
		}).mouseout(function(){
			$(".buyingzuo").hide();
			$(".buyingyou").hide();
			});
	var widthd=$(".buyingcon").width();
	var paged=1;
	var id=5;
	var numd=$(".buyinglist dl").length;
	var pagemaxd=Math.ceil(numd/id);
	$(".buyingyou").click(function(){
		if(!$(".buyinglist").is(":animated")){
		if(paged==pagemaxd){
			$(".buyinglist").animate({"left":"0"},500);
			paged=1;
		}else{
			$(".buyinglist").animate({"left":"-="+widthd+"px"},500);
			paged++;
			}
		}
	});
	$(".buyingzuo").click(function(){
		if(!$(".buyinglist").is(":animated")){
		if(paged==1){
			$(".buyinglist").animate({"left":-widthd*(pagemaxd-1)+"px"},500);
			paged=pagemaxd;
		}else{
			$(".buyinglist").animate({"left":"+="+widthd+"px"},500);
			paged--;
			}
		}
	});
	setInterval(function(){
		$(".buyingyou").trigger("click");
	},5000);
	
	/*模块图片切换*/
	$(".module").each(function(){
		$(this).find(".fllist li").eq(0).addClass("current");	
		$(this).find(".modulebig a").eq(0).show().siblings("a").hide();
		$(this).find(".fllist li").mouseover(function(){
			numg=$(this).index();
			$(this).addClass("current").siblings("li").removeClass("current");
			$(this).parents(".fenlei").siblings(".modulebig").find("a").eq(numg).fadeIn().siblings("a").fadeOut();
			});
		});
	
	$(".module").each(function(){
		var widthd=$(this).find(".flmid").height();
		var paged=1;
		var id=10;
		var numd=$(this).find(".fllist li").length;
		var pagemaxd=Math.ceil(numd/id);
		$(this).find(".flbot").click(function(){
			if(!$(this).siblings(".flmid").find(".fllist").is(":animated")){
			if(paged==pagemaxd){
				$(this).siblings(".flmid").find(".fllist").animate({"top":"0"},500);
				paged=1;
			}else{
				$(this).siblings(".flmid").find(".fllist").animate({"top":"-="+widthd+"px"},500);
				paged++;
				}
			}
		});
		$(this).find(".fltop").click(function(){
			if(!$(this).siblings(".flmid").find(".fllist").is(":animated")){
			if(paged==1){
				$(this).siblings(".flmid").find(".fllist").animate({"top":-widthd*(pagemaxd-1)+"px"},500);
				paged=pagemaxd;
			}else{
				$(this).siblings(".flmid").find(".fllist").animate({"top":"+="+widthd+"px"},500);
				paged--;
				}
			}
		});
	});
	/*兑换专区banner*/
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
});
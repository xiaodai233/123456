// JavaScript Document
$(document).ready(function(){
	/*分类部分 产品切换*/
	$(".listpro").each(function(){
		$(this).find(".listspan span").eq(0).addClass("current");
		$(this).find(".listspan span").mouseover(function(){
			numa=$(this).index();
			$(this).addClass("current").siblings("span").removeClass("current");
			$(this).parents(".listpro").find(".listdl dl").eq(numa).show().siblings("dl").hide();
			});
		});
	
	/*分类滚动*/
	$(".listcon").mouseover(function(){
		$(".listleft").show();
		$(".listright").show();
		}).mouseout(function(){
			$(".listleft").hide();
			$(".listright").hide();
			});
	var widthd=$(".listcon").width();
	var paged=1;
	var id=4;
	var numd=$(".listone").length;
	var pagemaxd=Math.ceil(numd/id);
	$(".listright").click(function(){
		if(!$(".listwrap").is(":animated")){
		if(paged==pagemaxd){
			$(".listwrap").animate({"left":"0"},500);
			paged=1;
		}else{
			$(".listwrap").animate({"left":"-="+widthd+"px"},500);
			paged++;
			}
		}
	});
	$(".listleft").click(function(){
		if(!$(".listwrap").is(":animated")){
		if(paged==1){
			$(".listwrap").animate({"left":-widthd*(pagemaxd-1)+"px"},500);
			paged=pagemaxd;
		}else{
			$(".listwrap").animate({"left":"+="+widthd+"px"},500);
			paged--;
			}
		}
	});
	
	$(".familydl dl").each(function(){
		$(this).find("dt a span").hide();
		$(this).mouseover(function(){
			$(this).find("dt a span").show();
			}).mouseout(function(){
				$(this).find("dt a span").hide();
				});
		});
});
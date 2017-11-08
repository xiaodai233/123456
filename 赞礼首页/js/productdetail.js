$(document).ready(function(){
	/*放大镜*/
	$(".jqzoom").jqueryzoom({
				xzoom:400,
				yzoom:438,
				offset:5,
				position:"right",
				preload:1   
	});
	$(".jqzoom>img").css({width:'400px',height:'400px'});
	
	$(".detailssmall span").eq(0).addClass("current");
	$(".jqzoom").eq(0).show().siblings(".jqzoom").hide();
	$(".detailssmall span").mouseover(function(){
		$(this).addClass("current").siblings("span").removeClass("current");
		numa=$(this).index();
		$(".jqzoom").eq(numa).show().siblings(".jqzoom").hide();
		});
	
	var widthd=$(".smallmid").width();
	var paged=1;
	var id=4;
	var numd=$(".smalllist span").length;
	var pagemaxd=Math.ceil(numd/id);
	$(".smallright").click(function(){
		if(!$(".smalllist").is(":animated")){
		if(paged==pagemaxd){
			$(".smalllist").animate({"left":"0"},500);
			paged=1;
		}else{
			$(".smalllist").animate({"left":"-="+widthd+"px"},500);
			paged++;
			}
		}
	});
	$(".smallleft").click(function(){
		if(!$(".smalllist").is(":animated")){
		if(paged==1){
			$(".smalllist").animate({"left":-widthd*(pagemaxd-1)+"px"},500);
			paged=pagemaxd;
		}else{
			$(".smalllist").animate({"left":"+="+widthd+"px"},500);
			paged--;
			}
		}
	});
	
	//选属性JS
	$(".ulfu li").eq(0).addClass("current");
	$(".ulfu li").click(function(){
		$(this).addClass("current").siblings("li").removeClass("current");
		});
	//绑定滚动事件
	var navH = $(".productInfo-right").find("ul").offset().top;
	$(window).scroll(function(){
		var scroH = $(this).scrollTop();
		if(scroH>=navH){  
			$(".productInfo-right").find("ul").css({"position":"fixed","top":0});
	    }
	    else if(scroH<navH){
	    	$(".productInfo-right").find("ul").css({"position":"static"});
	    }
	});
	
	/*输入赞礼币 人民币的变化*/
	$(".priceyes input").focus(function(){
		if($(this).is(".zanlibi")){
			$(this).siblings(".none").next("span").remove();
			vnum=$(this).val();
			webnum=parseFloat($(this).siblings(".none").text());
			webnumx=parseFloat($(this).siblings(".none").text());
			if(vnum<0){
				//alert('请输入大于零的整数');
				$(this).val(this.defaultValue);
				$(this).siblings(".none").next("span").remove();
				$(this).siblings(".none").after("<span>"+webnumx.toFixed(2)+"</span>");
				return false;
			}
			if(vnum>webnum){
				alert('您的商品最多只需要'+webnum+'个赞礼币哦');
				$(this).val(this.defaultValue);
				$(this).siblings(".none").next("span").remove();
				$(this).siblings(".none").after("<span>"+webnumx.toFixed(2)+"</span>");
				return false;
			}
			if(isNaN(vnum)){
				//alert("请输入大于零的数字");
				$(this).val(this.defaultValue);
				$(this).siblings(".none").next("span").remove();
				$(this).siblings(".none").after("<span>"+webnumx.toFixed(2)+"</span>");
				return false;
			}
			if(parseInt(vnum)!=vnum){
				//alert("不可以输入小数哦");
				$(this).val(this.defaultValue);
				$(this).siblings(".none").next("span").remove();
				$(this).siblings(".none").after("<span>"+webnumx.toFixed(2)+"</span>");
				return false;
				};
			/*单价人民币的变化*/
			var xa=webnumx-vnum;
			$(this).siblings(".none").next("span").remove();
			$(this).siblings(".none").after("<span>"+xa.toFixed(2)+"</span>");	
		}
	}).keyup(function(){
		$(this).trigger("focus");
		});
	
	
});
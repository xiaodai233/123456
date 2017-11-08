// JavaScript Document
$(document).ready(function(){
	/*返回顶部*/
	(function($){
		var goToTopTime;
		$.fn.goToTop=function(options){
			var opts = $.extend({},$.fn.goToTop.def,options);
			var $window=$(window);
			$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); // opera fix
			var $this=$(this);
			clearTimeout(goToTopTime);
			goToTopTime=setTimeout(function(){
				var controlLeft;
				if ($window.width() > opts.pageHeightJg * 2 + opts.pageWidth) {
					controlLeft = ($window.width() - opts.pageWidth) / 2 + opts.pageWidth + opts.pageWidthJg;
				}else{
					controlLeft = $window.width()- opts.pageWidthJg-$this.width();
				}
				var cssfixedsupport=$.browser.msie && parseFloat($.browser.version) < 7;//判断是否ie6
				var controlTop=$window.height() - $this.height()-opts.pageHeightJg;
				controlTop=cssfixedsupport ? $window.scrollTop() + controlTop : controlTop;
				var shouldvisible=( $window.scrollTop() >= opts.startline )? true : false;
				if (shouldvisible){
					$this.stop().show();
				}else{
					$this.stop().hide();
				}
			},30);
			$(this).click(function(event){
				$body.stop().animate( { scrollTop: $(opts.targetObg).offset().top}, opts.duration);
				$(this).blur();
				event.preventDefault();
				event.stopPropagation();
			});
		};
		$.fn.goToTop.def={
			startline:300,//出现回到顶部按钮的滚动条scrollTop距离
			duration:200,//回到顶部的速度时间
			targetObg:"body"//目标位置
		};
	})(jQuery);
	$(function(){
		$('<ul class="side"><li class="backtop"><a href="javascript:;"><strong></strong><span>返回顶部</span></a></li><li class="gocar"><a href="#"><strong></strong><span>进购物车</span></a></li><li class="help"><a href="#"><strong></strong><span>帮助中心</span></a></li><li class="contact"><a href="#"><strong></strong><span>联系客服</span></a></li></ul>').appendTo("body");
	});
	$(function(){
	  $(".backtop").goToTop();
		  $(window).bind('scroll resize',function(){
			$(".backtop").goToTop({
			  duration:400
			});
		});
	});
	$(".side li").each(function(){
		$(this).find("a span").hide();
		$(this).mouseover(function(){
			$(this).find("a span").show().siblings("strong").hide();
			}).mouseout(function(){
				$(this).find("a span").hide().siblings("strong").show();
				});
		});
	
	/*关注我们*/
	$(".topleft").mouseover(function(){
		$(".activeall").show();
		offset=$(this).offset();
		$(".activeall").css({"top":(offset.top+16)+"px","left":(offset.left+0)+"px"});
		$(".activeall").mouseover(function(){
			$(this).show();
			}).mouseout(function(){
				$(this).hide();
				})
	}).mouseout(function(){
		$(".activeall").hide();
		});
		
	/*搜索框*/	
	$(".searchcon").focus(function(){
		if($(this).val()==this.defaultValue){
			$(this).val("");
			}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val(this.defaultValue);
			}
	});
		
	/*购物车*/
	$(".car").mouseover(function(){
		$(".carproduct").show();
		offset=$(this).offset();
		$(".carproduct").css({"top":(offset.top+42)+"px","left":(offset.left-35)+"px"});
		$(".carproduct").mouseover(function(){
			$(this).show();
			}).mouseout(function(){
				$(this).hide();
				})
	}).mouseout(function(){
		$(".carproduct").hide();
		});
});
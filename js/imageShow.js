$(function(){	
	//body2
	$(".imgopt ul li").click(function(){
		$(this).css("background-image","url(./images/01.3ca183b.png)").animate({width:"220px"},300)
		$(this).siblings().css("background-image","url(./images/下载.png)").animate({width:"150px"},300)
	})
	$(".imgopt ul li").click(function(){
		$(".imgshow").animate({left: $(this).index() * - 825},300);
	})
	$(".imgopt ul li:eq(0)").css("background-image","url(./images/01.3ca183b.png)").animate({width:"220px"},300)
	$(".imgopt ul li:eq(0)").siblings().css("background-image","url(./images/下载.png)").animate({width:"150px"},300)
	
	var num=0;
	var timer=setInterval(function(){
	    num++;
	    if(num >= parseFloat($('.imgopt ul li').length)){
	        num=0;
	        $('.imgshow').animate({left:num*-825},300);
			$(".imgopt ul li:eq(0)").css("background-image","url(./images/01.3ca183b.png)").animate({width:"220px"},300)
			$(".imgopt ul li:eq(0)").siblings().css("background-image","url(./images/下载.png)").animate({width:"150px"},300)
	    }else if(num == 1){
	        $('.imgshow').animate({left:num*-825},300);
			$(".imgopt ul li:eq(1)").css("background-image","url(./images/01.3ca183b.png)").animate({width:"220px"},300)
			$(".imgopt ul li:eq(1)").siblings().css("background-image","url(./images/下载.png)").animate({width:"150px"},300)
	    }else if(num == 2){
			$('.imgshow').animate({left:num*-825},300);
			$(".imgopt ul li:eq(2)").css("background-image","url(./images/01.3ca183b.png)").animate({width:"220px"},300)
			$(".imgopt ul li:eq(2)").siblings().css("background-image","url(./images/下载.png)").animate({width:"150px"},300)
		}
	},3500);
	
	
	
	
	//body3
	$(".characters").mouseenter(function(){
		$(this).siblings().css("filter","blur(10px)")
		$(this).mouseleave(function(){
			$(this).siblings().css("filter","blur(0px)")
		})
	})

	
	
		
	//body4
	$(".wn").click(function(){
		$(".worldimg").animate({top: $(this).index() * - 450},300);
	})
	$(".fn").click(function(){
		$(".featureimg").animate({left: $(this).index() * - 835},250);
	})
	$(".featureimg-nav ul .fn").click(function(){
		$(this).css("opacity","1").siblings().css("opacity","0.3")
	})
	
	
	
	
	//body5
	function act() {
		$(".featureimg").animate({left: index * - 835},250)
		$(".featureimg-nav ul li").eq(index).addClass('fnshow').siblings('li').removeClass('fnshow')
	}
	var index = 0
	$(".featureimg-left").click(function(){
		index--
		if (index < 0) {
			index = $(".featureimg-nav ul li").length - 1
			act()
		} else {
			act()
		}
	})
	$(".featureimg-right").click(function(){
		if (index < $(".featureimg-nav ul li").length - 1) {
			index++
			act()
		} else {
			index = 0
			act()
		}
	})	
})
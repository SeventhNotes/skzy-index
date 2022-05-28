$(document).ready(function(){
			$("#head").slideDown(800)
			$(".navtree2").fadeTo(0,0)
			$("#body").fullpage()
			$("#body").fullpage({
				anchors:['page1','page2','page3','page4','page5','page6'],
				menu:'#nav',
				onLeave: function(index,nextindex){
					if(nextindex == 1){
						$("#nav").css("display","none")
					}else if(nextindex == 2){
						$("#nav").css("display","block")
						$(".news2").fadeTo(300,1).css("z-index","99").siblings().fadeTo(200,0).css("z-index","96")
						$(".news1").fadeTo(100,0).siblings().fadeTo(500,1)
					}else if(nextindex == 3){
						$("#nav").css("display","block")
						$(".character2").fadeTo(300,1).css("z-index","99").siblings().fadeTo(200,0).css("z-index","96")
						$(".character1").fadeTo(100,0).siblings().fadeTo(500,1)
					}else if(nextindex == 4){
						$("#nav").css("display","block")
						$(".world2").fadeTo(300,1).css("z-index","99").siblings().fadeTo(200,0).css("z-index","96")
						$(".world1").fadeTo(100,0).siblings().fadeTo(500,1)
					}else if(nextindex == 5){
						$("#nav").css("display","block")
						$(".feature2").fadeTo(300,1).css("z-index","99").siblings().fadeTo(200,0).css("z-index","96")
						$(".feature1").fadeTo(100,0).siblings().fadeTo(500,1)
					}else if(nextindex == 6){
						$("#nav").css("display","block")
						$(".media2").fadeTo(300,1).css("z-index","99").siblings().fadeTo(200,0).css("z-index","96")
						$(".media1").fadeTo(100,0).siblings().fadeTo(500,1)
					}
				}
			})

			$(".i-wx").mouseenter(function(){
				$(".iwx").stop(true,true).slideDown(100)
			})
			$(".i-wx").mouseleave(function(){
				$(".iwx").slideUp(250)
			})
			$(".i-qq").mouseenter(function(){
				$(".iqq").stop(true,true).slideDown(100)
			})
			$(".i-qq").mouseleave(function(){
				$(".iqq").slideUp(250)
			})
			$(".i-fx").mouseenter(function(){
				$(".ifx").stop(true,true).slideDown(100)
			})
			$(".i-fx").mouseleave(function(){
				$(".ifx").slideUp(250)
			})
			
			
			$(".home1").mouseenter(function(){
				$(".home2").fadeTo(300,1)
				$(".home1").fadeTo(100,0).stop(true,true)
			})
			$(".home1").mouseleave(function(){
				$(".home2").fadeTo(200,0,function(){
					$(".home1").fadeTo(500,1).stop(true,true)
				})
			})
			
			$(".news1").mouseenter(function(){
				$(".news2").fadeTo(300,1)
				$(".news1").fadeTo(100,0).stop(true,true)
			})
			$(".news1").mouseleave(function(){
				var znews2 = $(".news2").css("z-index") 
				if(znews2 != 99){
					$(".news2").fadeTo(200,0,function(){
						$(".news1").fadeTo(500,1).stop(true,true)
					})
				}
			})
			
			$(".character1").mouseenter(function(){
				$(".character2").fadeTo(300,1)
				$(".character1").fadeTo(100,0).stop(true,true)
			})
			$(".character1").mouseleave(function(){
				var zcharacter2 = $(".character2").css("z-index")
				if(zcharacter2 != 99){
					$(".character2").fadeTo(200,0,function(){
						$(".character1").fadeTo(500,1).stop(true,true)
					})
				}
			})
			
			$(".world1").mouseenter(function(){
				$(".world2").fadeTo(300,1)
				$(".world1").fadeTo(100,0).stop(true,true)
			})
			$(".world1").mouseleave(function(){
				var zworld2 = $(".world2").css("z-index") 
				if(zworld2 != 99){
					$(".world2").fadeTo(200,0,function(){
						$(".world1").fadeTo(500,1).stop(true,true)
					})
				}
			})
			
			$(".feature1").mouseenter(function(){
				$(".feature2").fadeTo(300,1)
				$(".feature1").fadeTo(100,0).stop(true,true)
			})
			$(".feature1").mouseleave(function(){
				var zfeature2 = $(".feature2").css("z-index") 
				if(zfeature2 != 99){
					$(".feature2").fadeTo(200,0,function(){
						$(".feature1").fadeTo(500,1).stop(true,true)
					})
				}
			})
			
			$(".media1").mouseenter(function(){
				$(".media2").fadeTo(300,1)
				$(".media1").fadeTo(100,0).stop(true,true)
			})
			$(".media1").mouseleave(function(){
				var zmedia2 = $(".media2").css("z-index")
				if(zmedia2 != 99){
					$(".media2").fadeTo(200,0,function(){
						$(".media1").fadeTo(500,1).stop(true,true)
					})
				}
			})
			
			$(".home1").click(function(){
				$("#nav").css("display","none")
			})
			$(".news1").click(function(){
				$(".news2").css("z-index","99").siblings().fadeTo(200,0).css("z-index","96")
				$(".news1").fadeTo(100,0).siblings().fadeTo(500,1)
			})
			$(".character1").click(function(){
				$(".character2").css("z-index","99").siblings().fadeTo(200,0).css("z-index","96")
				$(".character1").fadeTo(100,0).siblings().fadeTo(500,1)
			})
			$(".world1").click(function(){
				$(".world2").css("z-index","99").siblings().fadeTo(200,0).css("z-index","96")
				$(".world1").fadeTo(100,0).siblings().fadeTo(500,1)
			})
			$(".feature1").click(function(){
				$(".feature2").css("z-index","99").siblings().fadeTo(200,0).css("z-index","96")
				$(".feature1").fadeTo(100,0).siblings().fadeTo(500,1)
			})
			$(".media1").click(function(){
				$(".media2").css("z-index","99").siblings().fadeTo(200,0).css("z-index","96")
				$(".media1").fadeTo(100,0).siblings().fadeTo(500,1)
			})
			
			$(".newsnav1").click(function(){
				$(this).css("color","black").siblings().css("color","#767676")
				$(".ns11").css("display","block").siblings().css("display","none")
			})
			$(".newsnav2").click(function(){
				$(this).css("color","black").siblings().css("color","#767676")
				$(".ns12").css("display","block").siblings().css("display","none")
			})
			$(".newsnav3").click(function(){
				$(this).css("color","black").siblings().css("color","#767676")
				$(".ns13").css("display","block").siblings().css("display","none")
			})
			$(".newsnav4").click(function(){
				$(this).css("color","black").siblings().css("color","#767676")
				$(".ns14").css("display","block").siblings().css("display","none")
			})
			
			$(".wn1").click(function(){
				$(this).css("color","#f9c742").siblings().css("color","#ffffff")
				$(".wp1").css("display","block").siblings().css("display","none")
			})
			$(".wn2").click(function(){
				$(this).css("color","#f9c742").siblings().css("color","#ffffff")
				$(".wp2").css("display","block").siblings().css("display","none")
			})
			$(".wn3").click(function(){
				$(this).css("color","#f9c742").siblings().css("color","#ffffff")
				$(".wp3").css("display","block").siblings().css("display","none")
			})
			$(".wn4").click(function(){
				$(this).css("color","#f9c742").siblings().css("color","#ffffff")
				$(".wp4").css("display","block").siblings().css("display","none")
			})
			$(".wn5").click(function(){
				$(this).css("color","#f9c742").siblings().css("color","#ffffff")
				$(".wp5").css("display","block").siblings().css("display","none")
			})
			
			$(".img2").click(function(){
				$(".video-box").css("display","block")
			})
			$("video").click(function(){
				$(".video-box").css("display","none")
			})
		})
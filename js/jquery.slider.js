(function($, window, document, undefined) {


	$.fn.slider = function(){

		return this.each(function(){

			var that = $(this);

			var slider = $("#slider"),
				slide = $(".slide"),
				prevBtn = $(".prev"),
				nextBtn = $(".next"),
				dot = $(".dot"),
				index = 0,
				current = index;

			 function fitSlider(){
				var imgHeight = slide.height();
				console.log(imgHeight);
				slider.css({
				"height": imgHeight
				});
			}

			fitSlider();

			$(window).on("resize", function(){
				fitSlider();
			});


			slide.eq(index).show();
			dot.eq(index).addClass("active");


			nextBtn.on("click", function(){
				current = index;
				showSlide(index++);
			});

			prevBtn.on("click", function(){
				current = index;
				showSlide(index--);
			});

			dot.on("click", function(){
				index = $(this).index();
				showSlide(index);
			});

			function showSlide(){
				slide.hide();
				dot.removeClass("active");
				if(index > slide.length-1){index = 0};
				if(index < 0){index = slide.length-1};

				if(current < index){

					slide.eq(current).show().css({
						"margin-left": 0
					}).stop().animate({
						"margin-left": "-100%"
					});
					slide.eq(index).show().css({
						"margin-left": "100%"
					}).stop().animate({
						"margin-left": 0
					});

				}

				if(current > index){

					slide.eq(current).show().css({
						"margin-left": 0
					}).stop().animate({
						"margin-left": "100%"
					});
					slide.eq(index).show().css({
						"margin-left": "-100%"
					}).stop().animate({
						"margin-left": 0
					});

				}



				dot.eq(index).addClass("active");
			}



		});
	}


})(jQuery, window, document);

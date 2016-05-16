var main = function (){
	$(".jumbotron").hide();
	$("nav").hide();
	$(".mission").hide();
	$(".gallery").hide();
	$(".video").hide();
	$(".Ending").hide();
	
	$("#logo").click(function () {
		$(this).animate({
			height: "300px",
			marginTop: "70px"
		});
		$("nav")
			.css('opacity', 0)
			.slideDown('slow')
			.animate(
				{ opacity: 1},
				{ queue: false, duration: 'slow' }
			);
			
		setTimeout(function (){
			$(".mission").fadeIn(1000);
			$(".gallery").fadeIn();
			$(".video").fadeIn();
			$(".Ending").fadeIn();
		}, 1000);
		
	});
	
	var a = $("nav").offset().top;
	
	$(document).scroll(function () {
		if ($(this).scrollTop() - 50 > a){
			$("nav").addClass('fixed');
		} else{
			$("nav").removeClass('fixed');
		}
	});
	
	$('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
}

$(document).ready(main);
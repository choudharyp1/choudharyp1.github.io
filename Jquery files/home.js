$(document).ready(function(){
	
	$("nav").hide();
	$("#appstore").hide();
	$("#mission").hide();
	$("#video").hide();
	$("#contact").hide();
	$("footer").hide();
	
	$("#logo").click(function () {
	
	$(this).animate({
		height: "300px",
		marginTop: "60px",
		marginLeft: "20px",
	}, 800);
	$(this).css({"position" : "absolute" })
	$("nav")
	.css('opacity', 0)
	.slideDown('slow')
	.animate(
	{ opacity: 1},
	{ queue: false, duration: 'slow' }
	);
	
	$("nav").removeClass("hidden");
	$("#appstore").removeClass("hidden");
	$("#mission").removeClass("hidden");
	$("#video").removeClass("hidden");
	$("#contact").removeClass("hidden");
	
	setTimeout(function (){
		$("#appstore").fadeIn(1000);
		$("#home").addClass("IMAGE");
		$("#mission").fadeIn(1000);
		$("#video").fadeIn();
		$("#contact").fadeIn();
		$("footer").fadeIn();
		}, 1200);
		});	
// Initialize Tooltip
 $('[data-toggle="tooltip"]').tooltip(); 
 
 // Add smooth scrolling to all links in navbar + footer link
 $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
	 // Prevent default anchor click behavior
	 event.preventDefault();
	 // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});;
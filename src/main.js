var viewHeight = $(document).height();

$(document).scroll(function(e) {
	var scrollPos = $(document).scrollTop();

	var startFrac = Math.max(0, 1-scrollPos/(viewHeight * 0.5));
	$('.jumbotron .container').css('opacity', startFrac);
	$('.horizontalBar').css('width', (10 * startFrac/2) + "em");

  	if (scrollPos > $('.jumbotron').height() - 50) {
    	$('.navBar').addClass("solid");
    	$('.navBar').removeClass("clear");
  	} else {
    	$('.navBar').addClass("clear");
    	$('.navBar').removeClass("solid");
  	}
  
});
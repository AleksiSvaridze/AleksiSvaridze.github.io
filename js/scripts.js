

// Hide - Show Menu Window

$('.mobileNav').click(function() {

	$(this).toggleClass('active');

	$('.hiddenMobileMenu').toggle();

});


$('.mobileMenuLinks').click(function(){

	$('.mobileNav').removeClass('active');

	$('.hiddenMobileMenu').hide();

}); // End Hide - Show Menu Window


// =====  scroll

var scrollTop = $(".scrollTop");

$(window).scroll(function() {
    
    var topPos = $(this).scrollTop();

    
if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

}); // End Scroll

 
// Slow scroll scripts

$(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

});


	var scrollLink = $('.scroll');

    scrollLink.click(function(e) {
          e.preventDefault();
          $('body,html').animate({

          scrollTop: $(this.hash).offset().top
      }, 500);
          
    });


$(window).scroll(function() {

  var scrollBarLocation = $(this).scrollTop();
  scrollLink.each(function() {

    var divOffset = $(this.hash).offset().top 
}, 500);

    if ( divOffset <= scrollBarLocation ) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    } 

  }); // End Slow scroll scripts
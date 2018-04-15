//  viewportChecker


    $('.mainTextPng').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInLeft',
      offset: 100
    });

    $('.arrowDown').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInDown',
      offset: 100
    });


// about photography

    $('.about-p').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInLeft',
      offset: 100
    });

    $('.fast').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInRight',
      offset: 100
    });

    $('.slow').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInRightSlow',
      offset: 100
    });

    $('.verySlow').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInRightVerySlow',
      offset: 100
    });

// Gallery

  $('.bottomFast').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInFirst',
      offset: 100
    });

    $('.bottomMiddle').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInSecond',
      offset: 100
    });

    $('.bottomMiddleSlow').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInThird',
      offset: 100
    });

    $('.bottomSlow').addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInFour',
      offset: 100
    });



// Contact

  $('.contactBg').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 100
  });

  $('.contactBox').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 100
  });



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
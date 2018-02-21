$(document).ready(function() { 

// ------------------scroll Scripts
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

    if ( divOffset <= scrollBarLocation ) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});

// --------End----------scroll Scripts


$(".left-owl").owlCarousel({
            loop:true,
            autoplay:true,
            mouseDrag: false,
            autoplayTimeout: 5000,
            responsiveClass:true,
            responsive:{
            0:{
                items:1,
                nav:false
            }
      }
});

$(".right-owl").owlCarousel({
            loop:true,
            autoplay:true,
            mouseDrag: false,
            autoplayTimeout: 5000,
            responsiveClass:true,
            responsive:{
            0:{
                items:1,
                nav:false
            }
      }
});

$('.sticker-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false
});


$('.otskheli-images').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false
});

$('.chkadua-images').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false
});

$('.firosmani-images').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: false
});

// Burger Menu

$("#burger").on("click", function() {
    $("#burger").toggleClass("active");
    $("#hidden-bar").toggleClass("active");
});

$("#show-social-box").on("click", function() {
    $("#show-social-box").toggleClass("active");
});

$("#show-hidden-name-menu").on("click", function() {
    $("#show-hidden-name-menu").toggleClass("active");
});


$("#mobile-burger").on("click", function() {
    $("#mobile-burger").toggleClass("active");
    $("#mobile-hidden-bar").toggleClass("active");
});

$("#show-mobile-social-box").on("click", function() {
    $("#show-mobile-social-box").toggleClass("active");
});


// animate.css
$(".about-text h1").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInLeft",
    offset: 100
});

$(".about-text p").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInRight",
    offset: 100
});


$(".mobile-slider-wrapper").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInRight",
    offset: 100
});

$(".painter-img").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    offset: 100
});

$(".painter-text").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    offset: 100
});

$(".painter-slider").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp",
    offset: 100
});


});  //  End ready
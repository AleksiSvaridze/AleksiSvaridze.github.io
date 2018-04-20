
$('.nav-ul').on('click','a',function() {

		$('.nav-ul li a.active').removeClass('active')

		$(this).addClass('active');

});

$('.nav-ul').localScroll();

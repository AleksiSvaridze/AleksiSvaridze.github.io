function myFunction() {
    document.getElementById("mySidenav").classList.toggle("show");

    document.getElementById("round_btn").classList.toggle("round");    
}

/*------- slow scroll --------------------------------------*/

$(document).ready(function() {

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

/*------- Gallery --------------------------------------*/

      $(".owl-two").owlCarousel({
            loop:false,
            autoplay:false,
            margin: 10,
            responsiveClass:true,
            responsive:{
            0:{
                items:1,
                nav:false
            },
            500:{
                items:2,
                nav:false
            },
            750:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false
            },
            1200:{
                items:5,
                nav:false,
                loop:false
            }
      }
    });

      $(".owl-three").owlCarousel({
            loop:false,
            autoplay:false,
            margin: 10,
            responsiveClass:true,
            responsive:{
            0:{
                items:1,
                nav:false
            },
            500:{
                items:2,
                nav:false
            },
            750:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false
            },
            1200:{
                items:5,
                nav:false,
                loop:false
            }
      }
    });

      $(".owl-four").owlCarousel({
            loop:false,
            autoplay:false,
            margin: 10,
            responsiveClass:true,
            responsive:{
            0:{
                items:1,
                nav:false
            },
            500:{
                items:2,
                nav:false
            },
            750:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false
            },
            1200:{
                items:5,
                nav:false,
                loop:false
            }
      }
    });

      $(".owl-five").owlCarousel({
            loop:false,
            autoplay:false,
            margin: 10,
            responsiveClass:true,
            responsive:{
            0:{
                items:1,
                nav:false
            },
            500:{
                items:2,
                nav:false
            },
            750:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false
            },
            1200:{
                items:5,
                nav:false,
                loop:false
            }
      }
    });

});




/*-------- modal ----------------------------------------*/

function openModal() {
  document.getElementById("modal1").style.display = "block";
};

function closeModal() {
  document.getElementById("modal1").style.display = "none";
};
//-------------
function openModal2() {
  document.getElementById("modal2").style.display = "block";
};

function closeModal2() {
  document.getElementById("modal2").style.display = "none";
};
//-------------
function openModal3() {
  document.getElementById("modal3").style.display = "block";
};

function closeModal3() {
  document.getElementById("modal3").style.display = "none";
};
//-------------
function openModal4() {
  document.getElementById("modal4").style.display = "block";
};

function closeModal4() {
  document.getElementById("modal4").style.display = "none";
};
//-------------
function openModal5() {
  document.getElementById("modal5").style.display = "block";
};

function closeModal5() {
  document.getElementById("modal5").style.display = "none";
};
//-------------
function openModal6() {
  document.getElementById("modal6").style.display = "block";
};

function closeModal6() {
  document.getElementById("modal6").style.display = "none";
};

var scrollTop = $(".scrollTop");

$(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

}); // scroll END

  //Click event to scroll to top
$(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

}); // click() scroll top EMD

// Start Isotope

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if name ends with -ium
  ium: function() {
    var red = $(this).find('.red').text();
    return red.match( /red$/ );
  },
  ium: function() {
    var green = $(this).find('.green').text();
    return green.match( /green$/ );
  },
  ium: function() {
    var yellow = $(this).find('.yellow').text();
    return yellow.match( /yellow$/ );
  },
  ium: function() {
    var orange = $(this).find('.orange').text();
    return orange.match( /orange$/ );
  },
  ium: function() {
    var brown = $(this).find('.brown').text();
    return brown.match( /brown$/ );
  },
  ium: function() {
    var blue = $(this).find('.blue').text();
    return blue.match( /blue$/ );
  }
};
// bind filter button click
$('.filter-tabs-container').on( 'click', 'div', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'div', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

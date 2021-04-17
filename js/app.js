// init Isotope
var $grid = $('.portfolio_item').isotope({
    // options
  });
  // filter items on button click
  $('.portfolio_ul').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });


 });

// For active Class
$(document).ready(function(){
    $('.portfolio_ul li').click(function(){
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    })
});


/* 
    Owl Carousel
*/

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
  });
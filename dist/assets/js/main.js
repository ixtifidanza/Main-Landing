$(function () {

$('[data-scroll]').on('click', function(event) {
    event.preventDefault(); 

    var elementId = $(this).data('scroll');
    
    var elementOffset = $(elementId).offset().top;

    $('html, body').animate({
        scrollTop: elementOffset -70
    }, 2000);
});
    
    
    
    
    
    
    var swiper = new Swiper('.swiper-container', {
       
        slidesPerView: 2,
        spaceBetween: 0,
        loop: true,
        
        navigation: {
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
        },
    });
    
    
 
    
      $('.menu-btn').on('click', function() {
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
      });
    
});


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

        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
         
        }

    });

    var menuLinks = $('.menu-nav__link');
    var menuNav = $('.menu-nav');
    
      $('.menu-btn').on('click', function() {
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
      });

      menuLinks.on('click', function () {
        if (menuNav.hasClass('menu-nav_active')) {
            menuNav.removeClass('menu-nav_active');
            $('.menu-btn').removeClass('menu-nav_active');
        }

      });
    
});


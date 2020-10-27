var swiper = new Swiper('.swiper-container', {
    // slidesPerView: 1,
    // spaceBetween: 20,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // loopFillGroupWithBlank: true,    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
});


  $ (function () {


    let navToggle = $('#navToggle');


    
  navToggle.on('click', function(event) {
  event.preventDefault();
  nav.toggleClass('show');

    
  });


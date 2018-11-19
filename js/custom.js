
jQuery(document).ready(function($){

  $('.burger').on('click', function(){
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === 'none'){
      $(this).removeAttr('style');
      };
    });    
  });

   var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
  
});
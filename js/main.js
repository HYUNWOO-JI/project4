$(document).ready(function() {
    $('.overeffect').hover (
        function () {
            var _img = $(this).children().attr('src');
            _img = _img.replace('.png', '_on.png');
            console.log(_img);
            $(this).children().attr({src:_img});
        },
        function () {
            var _img = $(this).children().attr('src');
            _img = _img.replace('_on.png', '.png');
            console.log(_img);
            $(this).children().attr({src:_img});
        }
    );

    $(window).on('scroll', function () {
        var scrollY = $(this).scrollTop();
        console.log(scrollY);
        if (scrollY >= $(document).height() - $(this).height() - $('#footer').outerHeight()) $('.floating_bar').addClass('btm');
        else $('.floating_bar').removeClass('btm');
    });

    var promotionSwiper = new Swiper('.promotion .swiper-container', {
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },   
        autoplay: {
            // delay: 1000,
          },
      })
       //play, stop
  //일시정지 클릭
  $('.promotion .controller .autostop').on('click', function () {
    promotionSwiper.autoplay.stop(); //https://swiperjs.com/api/#autoplay
    return false;
  });
  //자동실행 클릭
  $('.promotion .controller .autoplay').on('click', function () {
    promotionSwiper.autoplay.start();
    return false;
  });
  $(window).on('scroll', function () {
    var scrollY = $(this).scrollTop();
    console.log(scrollY);
    var bannerHei = $('.promotion').height();
    console.log(bannerHei);
    if (scrollY > bannerHei) {
        $('#wrap').addClass('on').find('.header').addClass('fix')
    } else {
        $('#wrap').removeClass('on').find('.header').removeClass('fix')
    }
  });
});
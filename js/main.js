$(document).ready(function() {
  $('#wrap').css({opacity: 0}).stop().animate({opacity: 1}, 500);
  $(window).on('scroll', function (){
    var scrollY = $(this).scrollTop();
    var opa = 1 - (scrollY * 0.003);
    console.log(scrollY);

    //.webborn .tit1 불투명도 조절
    if (opa >= 0) $('.webborn .tit1').css({opacity: opa});
    else $('.webborn .tit1').css({opacity: 0});

    //스크롤이 푸터까지 내려갔을때 .webborn이 가려서 추가 제어
    if (scrollY > $('#profileblank').offset().top) {
      $('.webborn').css('opacity',0);
    } else {
      $('.webborn').css('opacity', 1);
    }

    //.fade075클래스명을 가진 요소에게 상단으로 100픽셀 올라오고 불투명도 1로 보여지게 처리
    $(".fade075").each(function () {
      if (scrollY > $(this).offset().top - $(window).height()*0.6) {
        $(this).addClass('up');
      }
  });

    // skill 막대 progress
    if (scrollY > $('.profile').offset().top - $(this).height() * 0.5){
      $('.skill').addClass('on');
    }
  });

  $('.nav .pagemove').on('click', function (e){
    e.preventDefault();
    var _target = $($(this).attr('href'));
    console.log(_target);
      $('html, body').stop().animate({scrollTop: _target.offset().top});
  });

  $(window).on('load resize', function () {
    //#container > section.projects > div.ceramic.cont_inner_right > div.proimg > a > img
    console.log($('.projects .proimg').width(), $('.projects .proimg img').width())
    var leftPos = ($('.projects .proimg').width() - $('.projects .proimg a img').width()) * 0.5;
    var topPos = ($('.projects .proimg').height() - $('.projects .proimg a img').height()) * 0.5;
    $('.projects .proimg img').css({top: topPos, left: leftPos});
  });
  $(window).trigger('resize');
});
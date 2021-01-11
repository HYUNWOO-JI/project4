$(document).ready(function() {
  $(window).on('scroll', function (){
    var scrollY = $(this).scrollTop();
    console.log(scrollY);

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
});
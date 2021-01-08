$(document).ready(function() {
  $(window).on('scroll', function (){
    var scrollY = $(this).scrollTop();
    console.log(scrollY);

    if (scrollY > $('.profile').offset().top - $(this).height() * 0.5){
      $('.skill').addClass('on');
    }
  });
});
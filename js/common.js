$(document).ready(function (){
    $(window).on('scroll', function (){
        var fixwidth = $('.fixedphone').width();
        console.log(fixwidth);
        if ($(this).scrollTop() >= fixwidth ){
            $('.fixedphone').addClass('scroll')
        } else {
            $('.fixedphone').removeClass('scroll')
        }
    });
});

// 헤더 이벤트
var scrollTop = 0;
scrollTop = $(document).scrollTop();

$(window).on('scroll resize', function (){
    scrollTop = $(document).scrollTop();
    fixHeader ();
});

function  fixHeader () {
    if( scrollTop > 600) {$('header').addClass('on');}
    else { $('header').removeClass('on');}
}   
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
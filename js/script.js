$(function(){
    const menu = $('.menu').offset();

    $(window).scroll(function(){
        if ($(window).scrollTop() > menu.top) {
            $('.menu').addClass('fixed');
        } else {
            $('.menu').removeClass('fixed');
        }
    })
});
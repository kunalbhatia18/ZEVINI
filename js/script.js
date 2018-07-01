$(function () {
    $(window).scroll(function () {
         
            if ($(document).scrollTop() > 100) {
                $('nav').css("height", "10vh").css("background-color", "rgb(60,60,60)");
            } else {
                $('nav').css("height", "12vh").css("background-color", "rgba(60,60,60,0.9)");
            }
        

    });

    var scrollLink = $('.scroll');
    scrollLink.on('click', function (event) {
        if (this.hash !== "") {
            $('body, html').stop().animate({
                scrollTop: $(this.hash).offset().top - $('nav').height()
            }, 1000);
        }
    });

    var topscroll = $('.top-scroll');
    topscroll.on('click', function (event) {
        // event.preventDefault();
        $('body, html').stop().animate({
            scrollTop: 0
        }, 1000);

    });

    

});

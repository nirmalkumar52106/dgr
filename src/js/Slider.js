export default function SliderJS() {
    var noOfProduct = $("#main-testi ul li").length;
    var totalProductWidth = 0;
    for (var i = 0; i < noOfProduct; i++) {
        var productWidth = $("#main-testi ul li").eq(i).outerWidth(true);
        totalProductWidth = totalProductWidth + productWidth;
    }

    $("#slider-testi").css('width', totalProductWidth + 'px');
    let aninInterval; 
    var speed = 1.5;
    animateProducts();

    function animateProducts() {
        $("#slider-testi li").eq(0).animate({
            'marginLeft': '-=' + speed + 'px'
        }, 1, function () {
            var animProductWidth = $(this).outerWidth(true);

            if (speed >= animProductWidth) {
                $(this).parent().append($(this));
                $(this).removeAttr('style');
            }

            aninInterval = setTimeout(function () {
                animateProducts();
            });
        });
    }

    $("#slider-testi").hover(function () {
        clearTimeout(aninInterval);
        $("#slider-testi li").eq(0).stop();
    }, function () {
        animateProducts();
    });

    $("#main-testi ul li:nth-child(1)").hover(function () {
        $(".t1").animate({ marginTop: '-80px' });
    });

    $("#main-testi ul li:nth-child(1)").mouseleave(function () {
        $(".t1").animate({ marginTop: '25px' });
    });

    $("#main-testi ul li:nth-child(2)").hover(function () {
        $(".t2").animate({ marginTop: '-80px' });
    });

    $("#main-testi ul li:nth-child(2)").mouseleave(function () {
        $(".t2").animate({ marginTop: '25px' });
    });

    $("#main-testi ul li:nth-child(3)").hover(function () {
        $(".t3").animate({ marginTop: '-80px' });
    });

    $("#main-testi ul li:nth-child(3)").mouseleave(function () {
        $(".t3").animate({ marginTop: '25px' });
    });

    $("#main-testi ul li:nth-child(4)").hover(function () {
        $(".t4").animate({ marginTop: '-80px' });
    });

    $("#main-testi ul li:nth-child(4)").mouseleave(function () {
        $(".t4").animate({ marginTop: '25px' });
    });

    $("#main-testi ul li:nth-child(5)").hover(function () {
        $(".t5").animate({ marginTop: '-80px' });
    });

    $("#main-testi ul li:nth-child(5)").mouseleave(function () {
        $(".t5").animate({ marginTop: '25px' });
    });

    $("#main-testi ul li:nth-child(6)").hover(function () {
        $(".t6").animate({ marginTop: '-80px' });
    });

    $("#main-testi ul li:nth-child(6)").mouseleave(function () {
        $(".t6").animate({ marginTop: '25px' });
    });
};
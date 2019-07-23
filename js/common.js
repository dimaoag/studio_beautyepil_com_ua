$('.review-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $('.slider-wrap__button--prev'),
    nextArrow: $('.slider-wrap__button--next'),
    adaptiveHeight: false
});


$(".anchor").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 800);
    return false;
});


$(".site-header__toggle").on( "click", function () {
    $(".header__menu-wrap").addClass("header__menu-wrap--open");
    $(".overlay").addClass("overlay--show");
    $("body").addClass("overflow-hidden");
});

$(".site-header__close").on("click", function () {
    $(".header__menu-wrap").removeClass("header__menu-wrap--open");
    $(".overlay").removeClass("overlay--show");
    $("body").removeClass("overflow-hidden");
});

$(".overlay").on("click", function () {
    $(".overlay").removeClass("overlay--show");
    $("body").removeClass("overflow-hidden");
    $(".header__menu-wrap").removeClass("header__menu-wrap--open");
});


$(".menu-list .anchor").on("click", function () {
    $(".overlay").removeClass("overlay--show");
    $("body").removeClass("overflow-hidden");
    $(".header__menu-wrap").removeClass("header__menu-wrap--open");
});

$("[data-mask='callback-catalog-phone']").mask("+38 (999) 999  99  99");


$(".close").on("click", function(){
    $(".modal").removeClass("modal--open");
});



$('.form-send').submit(function(){
    var form = $(this);
    var first_name = form.find($('input[name=first_name]')).val()
    var phone = form.find($('input[name=phone]')).val()


    $.ajax({
        url: 'send.php',
        data: {
            first_name: first_name,
            phone: phone
        },
        method: 'POST',
        success: function (data) {
            $('.modal--thanks').addClass('modal--open');
            form[0].reset()
        },
        error : function () {
            alert('Error!!!');
        }
    });
    return false;
});
$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1200);
        return false;
    });
    window.addEventListener('scroll', function () {
        if (pageYOffset < 50) {
            header.classList.remove('header-dark')
            menulink.classList.remove('menu__link-top')
        }
        if (pageYOffset > 50) {
            header.classList.add('header-dark')
            menulink.classList.add('menu__link-top')
        }
    });
    // MENU
    $('.menu__link').click(function () {
        $(this).toggleClass('menu__link-act');
        $('.menu__list').toggleClass('open');
    });
    $('.menu__list a, .content').click(function () {
        $('.menu__list').removeClass('open');
        $('.menu__link').removeClass('menu__link-act');
    });
    // ABOUT
    $('.about__tabs-link').click(function () {
        $('.about__tabs-link').removeClass('btn-cir');
        $(this).addClass('btn-cir');
    });
    $('#tab-link1').click(function () {
        $('.about__tab').removeClass('about__tab-act');
        $('#tab1').addClass('about__tab-act');
    });
    $('#tab-link2').click(function () {
        $('.about__tab').removeClass('about__tab-act');
        $('#tab2').addClass('about__tab-act');
    });
    $('#tab-link3').click(function () {
        $('.about__tab').removeClass('about__tab-act');
        $('#tab3').addClass('about__tab-act');
    });
    $('#tab-link4').click(function () {
        $('.about__tab').removeClass('about__tab-act');
        $('#tab4').addClass('about__tab-act');
    });
    // WORKS
    $('.works__tabs-link').click(function () {
        $('.works__tabs-link').removeClass('btn-cir');
        $(this).addClass('btn-cir');
    });
    $('#works-link1').click(function () {
        $('#works-tab1').css({
            'opacity':'1',
            'display':'flex'
        });
        $('#works-tab2,#works-tab3,#works-tab4').css({
            'opacity':'0',
            'display':'none'
        });
    });
    $('#works-link2').click(function () {
        $('#works-tab2').css({
            'opacity':'1',
            'display':'flex'
        });
        $('#works-tab1,#works-tab3,#works-tab4').css({
            'opacity':'0',
            'display':'none'
        });
    });
    $('#works-link3').click(function () {
        $('#works-tab3').css({
            'opacity':'1',
            'display':'flex'
        });
        $('#works-tab2,#works-tab1,#works-tab4').css({
            'opacity':'0',
            'display':'none'
        });
    });
    $('#works-link4').click(function () {
        $('#works-tab4').css({
            'opacity':'1',
            'display':'flex'
        });
        $('#works-tab2,#works-tab3,#works-tab1').css({
            'opacity':'0',
            'display':'none'
        });
    });
});
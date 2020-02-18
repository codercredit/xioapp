(function ($) {
    "use strict";


    $(".meanclose").click(function () {
        console.log(5+5);
    });


    /*------------- preloader js --------------*/
    function loader() {
        $(window).on('load', function () {
            $('#ctn-preloader').addClass('loaded');
            $("#loading").fadeOut(500);
            // Una vez haya terminado el preloader aparezca el scroll

            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function () {
                    $(this).remove();
                });
            }
        });
    }
    loader();

    // meanmenu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });

    // js - tilt
    if ($(".js-tilt").length) {
        $('.js-tilt').tilt();
    }

    // Counter
    var timer = $('.timer');
    if (timer.length) {
        timer.appear(function () {
            timer.countTo({
                speed: 1500,
                refreshInterval: 50,
            });
        });
    }

    // Screeshot Active
    $('#Wrapper-element').RollingSlider({
        showArea: ".slide-wrap",
        prev: "#jprev",
        next: "#jnext",
        moveSpeed: 400,
        autoPlay: false,
        stay: 5000,
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: false,
                arrows: false,
                stay: 1000,
            }
        }]
    });



    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });

    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })



    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });



    // mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
		]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();


    // owlCarousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    })


    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });


    // isotop
    $('.grid').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    //slick-activation
    $('.blog-active').slick({
        dots: false,
        accessibility: true,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<span class='a-left control-c prev-blog slick-prev'><i class='flaticon-right-arrow'></i></span>",
        nextArrow: "<span class='a-right control-c next-blog slick-prev'><i class='flaticon-right-arrow'></i></span>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    autoPlay: true,
                    arrows: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoPlay: true,
                    arrows: false
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoPlay: true,
                    arrows: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //slick-activation
    $('.testi-active').slick({
        dots: false,
        accessibility: false,
        adaptiveHeight: false,
        centerMode: false,
        centerPadding: '0px',
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<span class='a-left control-c prev-blog slick-prev'><i class='flaticon-right-arrow'></i></span>",
        nextArrow: "<span class='a-right control-c next-blog slick-prev'><i class='flaticon-right-arrow'></i></span>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoPlay: true,
                    arrows: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoPlay: true,
                    arrows: false
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //next-post-activation
    $('.next-post--active').slick({
        dots: false,
        accessibility: false,
        adaptiveHeight: false,
        centerMode: false,
        centerPadding: '0px',
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: "<span class='a-left next-control slick-prev'><i class='flaticon-right-arrow'></i></span>",
        nextArrow: "<span class='a-right next-control slick-prev'><i class='flaticon-right-arrow'></i></span>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoPlay: true,
                    arrows: false
                }
    },
            {
                breakpoint: 810,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoPlay: true,
                    arrows: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoPlay: true,
                    arrows: false
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });


    // -------------------- From Bottom to Top Button
    //Check to see if the window is top if not then display button
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    //---------------------- Click event to scroll to top
    $('.scroll-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

    // WOW active
    new WOW().init();


})(jQuery);

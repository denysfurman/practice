// loader


$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');

    }, 2000);


});

$(function() {

    $('.about_slider').owlCarousel({
        loop:true,
        nav:true,
        navText:[
            "<i class='fa fa-angle-left '></i>",
            "<i class='fa fa-angle-right '></i>"
        ],
        items:1



    });

    //------tabs
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs_main a').click(function(e){
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs_main').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })

    //galerry
    $(".fancybox").fancybox();



    //catalog slider
    $('.catalog_slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:[
            "<i class='fa fa-angle-left '></i>",
            "<i class='fa fa-angle-right '></i>"
        ],
        // autoplay:true,
        // autoplayTimeout:5000,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            767:{
                items:2
            },
            1000:{
                items:3
            },

            1250:{
                items:4
            }
        }
    });



    //  mobile menu
    jQuery(document).ready(function($){
        var $lateral_menu_trigger = $('#cd-menu-trigger'),
            $content_wrapper = $('.cd-main-content'),
            $navigation = $('header');

        //open-close lateral menu clicking on the menu icon
        $lateral_menu_trigger.on('click', function(event){
            event.preventDefault();

            $lateral_menu_trigger.toggleClass('is-clicked');
            $navigation.toggleClass('lateral-menu-is-open');
            $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
                $('body').toggleClass('overflow-hidden');
            });
            $('#cd-lateral-nav').toggleClass('lateral-menu-is-open');

            //check if transitions are not supported - i.e. in IE9
            if($('html').hasClass('no-csstransitions')) {
                $('body').toggleClass('overflow-hidden');
            }
        });

        //close lateral menu clicking outside the menu itself

        $(".cd-lateral-nav_close").on('click', function(event){

            $('#cd-lateral-nav').removeClass('lateral-menu-is-open');
            //check if transitions are not supported
            if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
                $lateral_menu_trigger.removeClass('is-clicked');
                $navigation.removeClass('lateral-menu-is-open');
                $content_wrapper.removeClass('lateral-menu-is-open').one('transitionend', function(){
                    $('body').removeClass('overflow-hidden');
                });

                if($('html').hasClass('no-csstransitions')) {
                    $('body').removeClass('overflow-hidden');
                }

            }
        });



        //open (or close) submenu items in the lateral menu. Close all the other open submenu items.
        $('.item-has-children').children('a').on('click', function(event){
            event.preventDefault();
            $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
        });
    });

    //timer
    var timer;

    var compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days

    timer = setInterval(function() {
        timeBetweenDates(compareDate);
    }, 1000);

    function timeBetweenDates(toDate) {
        var dateEntered = toDate;
        var now = new Date();
        var difference = dateEntered.getTime() - now.getTime();

        if (difference <= 0) {

            // Timer done
            clearInterval(timer);

        } else {

            var seconds = Math.floor(difference / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);

            hours %= 24;
            minutes %= 60;
            seconds %= 60;

            $("#days").text(days);
            $("#hours").text(hours);
            $("#minutes").text(minutes);
            $("#seconds").text(seconds);
        }
    }


// ssss
    var $frame  = $('#basic');
    var $slidee = $frame.children('ul').eq(0);
    var $wrap   = $frame.parent();

    // Call Sly on frame
    $frame.sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        scrollBar: $wrap.find('.scrollbar'),
        scrollBy: 1,
        activatePageOn: 'click',
        speed: 300,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,
    });






});


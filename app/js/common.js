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

            1200:{
                items:4
            }
        }
    });



    $("#container").scrollLeft( 1300 );

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


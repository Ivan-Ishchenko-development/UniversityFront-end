(function($){
    $( document ).ready(function() {
        
        // $('.home-banner video').css("display", "none")
        // console.log($(window).location);
        // console.log('offset ' + $('document').offset());
        // if($(window).offset().top <= 200)
        //     $('body').addClass('body-limit');
        // Preloader

        

        $('.front-img').toggleClass('zoomedIn');
        setTimeout(() => {
            $('.front-img').animate({
                opacity: 0
            }, 1000);
           }, 1000)

        setTimeout(() => {
            $('.welcome').css("display", "block");
            $('.welcome').animate({
                top: '50%'
            }, 500);
        },3000);

        setTimeout(() => {
            $('.preloader-wrapper').addClass('animated fadeOut');
            if($(window).scrollTop() <= 0 )
                $('body').removeClass('body-limit');
            // $('.home-banner video').css("display", "inline-block")
        },4600);

        const preloaderSlideUpDelay = 2000;
        // const preloaderSlideUpDuration = 2000;

        // setTimeout(() => {
        // $('.front-img').addClass('animated fadeOutUp')}, preloaderSlideUpDelay)
        setTimeout(() => {
         $('.front-img').css('display', 'none');
        }, preloaderSlideUpDelay)

        
        $('#header').hide();
        //fixed header
        $(window).on('scroll', function () {
            $header = $('#header');
            if ($(window).scrollTop() < 200)
            {
                $header.hide();
            } else
            {
                $("#header").addClass('animated fadeInDown is-sticky').show();
            }
        });

        //animation toggling
        var $window = $(window),
            win_height_padded = $window.height() * 0.8;
    
        function revealOnScroll() {
            var scrolled = $window.scrollTop();
            $(".revealOnScroll:not(.animated)").each(function () {
                $(this).css('visibility','hidden');
                var $this = $(this),
                    offsetTop = $this.offset().top;
        
                if (scrolled + win_height_padded >= offsetTop) {
                   
                    if ($this.data('timeout')) {
                        window.setTimeout(function () {
                            $this.css('visibility','visible');
                            $this.addClass('animated ' + $this.data('animation'));
                        }, parseInt($this.data('timeout'), 10));
                    } else {
                        $this.css('visibility','visible');
                        $this.addClass('animated ' + $this.data('animation'));
                    }
                }
            });
        }
        $window.on('scroll', revealOnScroll);

        //mobile menu
        $('.btn-nav-toggler').on('click',function(){
            $('.header-nav').slideToggle();
            $('body').toggleClass('body-limit');
        });

    
        $('.has-dropdown').on('click',function(){
            $this = $(this);
            $('.dropdown-toggler',$this).toggleClass('active');
            $('.dropdown',$this).slideToggle();
            if($('.dropdown-toggler',$this).hasClass('active')){
                $('.dropdown-toggler i',$this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }else{
                $('.dropdown-toggler i',$this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
        });
        if($(window).width()<992){
            $('.appointment').on('click',function(){
                $('.header-nav').slideToggle();
                $('body').removeClass('body-limit');
            });
    
            $('.therapist').on('click',function(){
                $('.header-nav').slideToggle();
            });
        }
        
            
               
            
        
    });
   

    
})(jQuery)


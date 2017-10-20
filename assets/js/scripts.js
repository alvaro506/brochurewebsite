(function ($) {
    "use strict";

	  	/*-------------------------------------------------------------------
	  					For Sticky Menu
	  	-------------------------------------------------------------------*/
	  	$(window).on('scroll',function(){
		   if ( $(this).scrollTop() > 100  ){
		   $('header').addClass('sticky');
		}
		else{
		   $('header').removeClass('sticky');
		}
		});

		$(document).on('click', '.navbar-collapse.in', function (e) {
	        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
	            $(this).collapse('hide');
	        }
	    });
	  	/*-------------------------------------------------------------------
	  					For Parallax Js
	  	-------------------------------------------------------------------*/
		selectiveBackground();
		$(window).resize( function() {
			 selectiveBackground();
		});

		function selectiveBackground () {
			if ( $(window).width() >= 1200 ) {
				$('.banner-area').parallax('50%','.3');	
			}
		}
	    /*-------------------------------------------------------------------
	  					For Scroll Spy
	  	-------------------------------------------------------------------*/
		$("a").on('click', function(event) {
	      if (this.hash !== "") {
	        event.preventDefault();
	        var hash = this.hash;$('html, body').animate({
	          scrollTop: $(hash).offset().top
	        }, 1000, function(){
	          window.location.hash = hash;
	        });
	      }
	    });
		
		/*-------------------------------------------------------------------
	  					For Isotope Sorting Js
	  	-------------------------------------------------------------------*/
	  	jQuery(window).load(function () {
			var $portfolio = $('.portfolio-item').isotope({});
			$('.portfolio-menu').on('click', 'li', function () {
	            var filterValue = $(this).attr('data-filter');
	            $portfolio.isotope({
	                filter: filterValue
	            });
	        });
	    });

		$('.portfolio-menu li').on('click', function () {
	        $(this).siblings('li').removeClass('active');
	        $(this).addClass('active');
    	});

	  	/*-------------------------------------------------------------------
	  					For Owl-Carousel js
	  	-------------------------------------------------------------------*/
		var testmonials = $('.client-say');
		    testmonials.owlCarousel({
		    loop:true,
		    margin: 10,
		    autoplay:true,
		    smartSpeed:1000,
		    autoplayTimeout:3000,
		    items:1,
		    animateOut: 'fadeOutLeft',
		    animateIn: 'fadeInRight'
    	});

		/*-------------------------------------------------------------------
	  					For Video bg
	  	-------------------------------------------------------------------*/    
	    var bgVideo = $('.background-video'),
	        videoId = bgVideo.attr('data-video');
	    	bgVideo.each(function () {
	        $(this).YTPlayer({
	            fitToBackground: true,
	            videoId: videoId,
	            pauseOnScroll: false
	        });
	    });
	    
	    /*-------------------------------------------------------------------
	  					For Scroll Top
	  	-------------------------------------------------------------------*/
	  	$(window).on('scroll',function(){
	    if($(this).scrollTop() > 600){
	        $('.scroll-top').removeClass('not-visible');
	    }
	    else{
	        $('.scroll-top').addClass('not-visible');
	    }
		});
	    $('.scroll-top').on('click',function (event){
	        $('html,body').animate({
	            scrollTop:0
	        },1000);
	    });

	     /*-------------------------------------------------------------------
	  					For Preloader js
	  	-------------------------------------------------------------------*/
	  	$('.preloader').fadeOut('slow');

		/*-------------------------------------------------------------------
	  					For nav options js
	  	-------------------------------------------------------------------*/
		$('button.navbar-toggle').on('click',function (event) {
			$('.header-area').toggleClass('open');
	    });
	   
})(jQuery);
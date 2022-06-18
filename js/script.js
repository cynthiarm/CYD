


;(function ($) {

	'use strict';

	  /**
   * Animation on scroll function and init
   */
	   function aos_init() {
		AOS.init({
		  duration: 1000,
		  easing: 'ease-in-out',
		  once: true,
		  mirror: false
		});
	  }
	  window.addEventListener('load', () => {
		aos_init();
	  });

	$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000

	});

	$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.testimonial-wrap').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  
  		]
	});


   $('.portfolio-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


	var map;

	function initialize() {
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(50.97797382271958, -114.107718560791)
			// styles: style_array_here
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}

	var google_map_canvas = $('#map-canvas');

	if (google_map_canvas.length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	// Counter

	$('.counter-stat').counterUp({
	      delay: 10,
	      time: 1000
	  });

	 /**
   * Preloader
   */
	  const preloader = document.querySelector('#preloader');
	  if (preloader) {
		window.addEventListener('load', () => {
		  preloader.remove();
		});
	  }

	    //Hero Slider
		$('.hero-slider').slick({
			autoplay: true,
			infinite: true,
			arrows: true,
			prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
			nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
			dots: true,
			customPaging: function (slider, i) {
				var icon = $(slider.$slides[i]).data('icon');
				var text = $(slider.$slides[i]).data('text');
				console.log(slider.$slides[i]);
				return '<a><i class="' + icon + '"></i><span>' + text + '</span></a>';
			},
			responsive: [{
				breakpoint: 576,
				settings: {
					arrows: false
				}
			}]
		});
		$('.hero-slider').slickAnimation();
	
		// hero slider without pagination
		$('.hero-slider-2').slick({
			autoplay: true,
			infinite: true,
			arrows: false,
			dots: false
		});
		$('.hero-slider-2').slickAnimation();



		/* 2. sticky And Scroll UP 
	/*	$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 400) {
			  $(".header-sticky").removeClass("sticky-bar");
			  $('#back-top').fadeOut(500);
			} else {
			  $(".header-sticky").addClass("sticky-bar");
			  $('#back-top').fadeIn(500);
			}
		  });*/


  /**
   * Sticky header on scroll
   */
   const selectHeader = document.querySelector('#header');
   if (selectHeader) {
	 document.addEventListener('scroll', () => {
	   window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
	 });
   }
 
   /**
	* Navbar links active state on scroll
	*/
   let navbarlinks = document.querySelectorAll('#navbar .scrollto');
 
   function navbarlinksActive() {
	 navbarlinks.forEach(navbarlink => {
 
	   if (!navbarlink.hash) return;
 
	   let section = document.querySelector(navbarlink.hash);
	   if (!section) return;
 
	   let position = window.scrollY;
	   if (navbarlink.hash != '#header') position += 200;
 
	   if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
		 navbarlink.classList.add('active');
	   } else {
		 navbarlink.classList.remove('active');
	   }
	 })
   }
   window.addEventListener('load', navbarlinksActive);
   document.addEventListener('scroll', navbarlinksActive);
 
   /**
	* Function to scroll to an element with top ofset
	*/
   function scrollto(el) {
	 const selectHeader = document.querySelector('#header');
	 let offset = 0;
 
	 if (selectHeader.classList.contains('sticked')) {
	   offset = document.querySelector('#header.sticked').offsetHeight;
	 } else if (selectHeader.hasAttribute('data-scrollto-offset')) {
	   offset = selectHeader.offsetHeight - parseInt(selectHeader.getAttribute('data-scrollto-offset'));
	 }
	 window.scrollTo({
	   top: document.querySelector(el).offsetTop - offset,
	   behavior: 'smooth'
	 });
   }


		  // banner-carousel
		function bannerCarouselOne() {
			$('.banner-carousel.banner-carousel-1').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: true,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
			$('.banner-carousel.banner-carousel-1').slickAnimation();
		}
		bannerCarouselOne();


		// banner Carousel Two
		function bannerCarouselTwo() {
			$('.banner-carousel.banner-carousel-2').slick({
				fade: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		bannerCarouselTwo();

		// banner Carousel Two
		function bannerCarouselThree() {
			$('.banner-carousel.banner-carousel-3').slick({
				fade: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		bannerCarouselThree();

		// pageSlider
		function pageSlider() {
			$('.page-slider').slick({
				fade: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: false,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		pageSlider();

})(jQuery);

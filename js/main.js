$(document).ready(function($) {

	// Nav toggle
	$('.nav-collapse').on('click', function(){
		$('nav ul').toggleClass('showing');
		$('#nav-icon').toggleClass('open');
	});

	// NAV SCROLL //////////////////////////////////
	$(window).scroll(function () {
	    /*var iCurScrollPos = $(this).scrollTop();
	    if (iCurScrollPos > iScrollPos) {
	        //Scrolling Down
	        $('nav').removeClass('affix');
	    } else {
	       //Scrolling Up
	       $('nav').addClass('affix');  
	    } */

	    if ($(window).scrollTop()<=700) {
	      $('nav').css({
	      	'height': '80px',
	      	'opacity': '1'
	      });
	      $('.nav-wrapper').css('margin-top', '15px');
	    } 

	    if ($(window).scrollTop()>=800) {
	      $('nav').css({
	      	'height': '60px',
	      	'opacity': '0.8'
	      });
	      $('.nav-wrapper').css('margin-top', '5px');
	    }
	});




	// TWEENMAX ////////////////////////////////////

	// init controller
	var controller = new ScrollMagic.Controller();

	// SECT-ABOUT /////////////////////////////////////
	var tlSect1 = new TimelineMax();

	tlSect1
		.from(".line", 1.5, {width: '0%', ease: Power3.easeInOut})
		.to('#about .about .woods', 0.4, {opacity: 1, ease: Linear.easeNone})
		.to("#wood-2", 1.5, {x: 15, ease: Linear.easeNone}, "-=0.5")
		.to("#wood-3", 1.5, {x: 30, ease: Linear.easeNone}, "-=1.5")
		.to("#wood-4", 1.5, {x: 40, ease: Linear.easeNone}, "-=1.5")

	var sceneSect1 = new ScrollMagic.Scene({
					triggerElement: "#about", 
					triggerHook: "0.5"
					})
					.setTween(tlSect1)
					//.addIndicators() // add indicators 
					.addTo(controller);


	// SECT-2 /////////////////////////////////////
	var tlSect2 = new TimelineMax();

	tlSect2
		.from("#products .top-right-img", 2, {x: "+=30", ease: Power2.easeInOut})
		.to("#products .bottom-left-img", 1, {y: "+=150", ease: Linear.easeInOut}, 4)
		.to("#products .tree", 1, {x: "-=80", ease: Power1.easeInOut}, "-=1")

	var sceneSect2 = new ScrollMagic.Scene({
					triggerElement: "#products", 
					triggerHook: "0.35"
					})
					.setTween(tlSect2)
					//.addIndicators() // add indicators 
					.addTo(controller);

	// SECT-2 /////////////////////////////////////
	var tlServices = new TimelineMax();

	tlServices
		.from("#services .container", 1, {y: "+=30", autoAlpha: 0, ease: Power3.easeInOut})

	var sceneServices = new ScrollMagic.Scene({
					triggerElement: "#services", 
					triggerHook: "0.7", 
					duration: 500})
					.setTween(tlServices)
					//.addIndicators() // add indicators 
					.addTo(controller);

	// SECT-2 /////////////////////////////////////
	var tlPortfolio = new TimelineMax();

	tlPortfolio
		.from("#portfolio .top-right-img", 1, {x: "+=100", autoAlpha: 0, ease: Power2.easeInOut})
		.to("#portfolio .bottom-left-img", 1, {y: "+=150", ease: Linear.easeInOut}, "+=2")

	var scenePortfolio = new ScrollMagic.Scene({
					triggerElement: "#portfolio", 
					triggerHook: "0.3", 
					duration: 1200})
					.setTween(tlPortfolio)
					//.addIndicators() // add indicators 
					.addTo(controller);

	// CAROUSEL ///////////////////////////////////	

	$("#cases-box").owlCarousel({
 
      loop:true,
      margin:0,
      nav:false,
      dots: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      autoplaySpeed: 2000,
	  items:1,
      animateOut: 'fadeOut'
  });
	
	//Logos carousel
	$("#logos").owlCarousel({
 
	      loop:true,
	      margin:60,
	      nav:false,
	      dots: false,
	      stagePadding: 50,
	      autoplay:true,
	      autoplayTimeout:2500,
	      autoplayHoverPause:true,
	      autoplaySpeed: 1000,
	      responsive:{
	          0:{
	              items:2
	          },
	          600:{
	              items:3
	          },
	          1000:{
	              items:4
	          }
	      }
	 
	  });

	$('a[data-toggle="modal"]').click(function() {
		$('.modal').css('display', 'flex');
		return false
	});

	$('.close').click(function() {
		$(".modal").css('display', 'none');
		return false
	});

	$('#services .container a').click(function(event) {
		return false
	});



	$("a.gallery").fancybox();

});

$(document).tooltip();
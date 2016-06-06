$(document).ready(function($) {
	
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

});
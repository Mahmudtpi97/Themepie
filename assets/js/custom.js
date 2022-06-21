(function($){

$(document).ready(function(){
  // Menu Slider
    $('.navber .nav li a').click(function(){
       $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
         }, 1000);
         return false;
      });

   // Header Area
   $('#main-nav').hcOffcanvasNav({
     position:'right',
     height:'0',
	});

	$('#search-area').click(function(){
     $('.search-box').slideToggle();
	});

   $('.header-slider').owlCarousel({
		loop:true,
		items:1,
		nav:false,
		dots:true,
	});	
   // Portfolio Area
	var options = {
		animation:{
	        enable: true,
	         easing: 'cubic-bezier(0.645,0.045,0.355,1)'
	    },
	    load: {
	        filter: '.print-design'
	    },
	}
	var mixer = mixitup('.portfolio-mix',options);
   
   $('.work').owlCarousel({
		loop:true,
		items:1,
		dots:false,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i><i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i>'],
	});

$('.web-img-popup').magnificPopup({
   type:'image',
   gallery:{
    enabled:true
   }
 });  
 $('.p-img-popup').magnificPopup({
   type:'image',
   gallery:{
    enabled:true
   }
 });  
 $('.application-img-popup').magnificPopup({
   type:'image',
   gallery:{
    enabled:true
   }
 }); 
 $('.photoshop-img-popup').magnificPopup({
   type:'image',
   gallery:{
    enabled:true
   }
 }); 

   // Team Area
  $('.team-carousel').owlCarousel({
		loop:true,
		items:1,
		dots:false,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i><i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i>'],
	});
  // Customer Reviwes Area
  $('.client-review').owlCarousel({
		loop:true,
		items:1,
		dots:false,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i><i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i>'],
	});	
  // Twitter Area
   $('.twit-carousel').owlCarousel({
		loop:true,
		items:1,
		nav:false,
		dots:true,
	});
   // Progress
       $('.pro-1').barfiller({
        	  symbol:'%',
        	  tooltip: true,
        	  duration: 1000,
        	  animateOnResize: false,
        });  
        $('.pro-2').barfiller({
        	symbol:'%',
        	  tooltip: true,
        	  duration: 1000,
        	  animateOnResize: false,
        }); 
        $('.pro-3').barfiller({
        	symbol:'%',
        	  tooltip: true,
        	  duration: 1000,
        	  animateOnResize: false,
        });
        // Blog Area
	$('.blog-video').magnificPopup({
		items:{
			src: 'https://player.vimeo.com/video/174251571' 
		},
		  type: 'iframe',
   
      iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', 
        patterns: {
            youtube: {
                index: 'vimeo.com/', 
                id: 'v=', 
                src: 'https://player.vimeo.com/video/174251571' 
            }
         },
         srcAction: 'iframe_src', 
     }
	});

	// Footer Area

 $('.work-img').magnificPopup({
   type:'image',
   gallery:{
    enabled:true
   }
 });

});
})(jQuery);
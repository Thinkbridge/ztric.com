( function($) {
$(document).ready(function () {
					 "use strict"; 
							
								 
							$(window).scroll(function() {
							  if ($(this).scrollTop() > 80) {
								$(".header").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 0) {
								$(".header3").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header3").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 0) {
								$(".header2").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header2").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 40) {
								$(".header4").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header4").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 0) {
								$(".header5").css({"position": "fixed", "top": 0, "width": "100%","background":"transparent"});
							  } else {
								$(".header5").removeAttr("style");
							  }
							});

						
		
		
	 
						 $("#tabs a").click(function(e){

							e.preventDefault();

							$(this).tab('show');
							
						}); 
						
						
								
						/*
									 *  Simple image gallery. Uses default settings
									 */

									$('.fancybox').fancybox();

									/*
									 *  Different effects
									 */

									// Change title type, overlay closing speed
									$(".fancybox-effects-a").fancybox({
										helpers: {
											title : {
												type : 'outside'
											},
											overlay : {
												speedOut : 0
											}
										}
									});

								$("#owl-testimonial-1").owlCarousel({
										autoPlay: true, //Set AutoPlay to 3 seconds
										
									  items : 1,
									navigation : true
								  });
									
								$("#owl-testimonial-2").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  });		
						$("#owl-testimonial-3").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  });
						 $("#owl-testimonial-4").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  }); 
						   $("#owl-testimonial-5").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  });
					if ($(".slider").length > 0) {
  $('.slider').revolution({
        delay: 7000,
        startwidth: 1200,
        startheight: 600,
        autoHeight: "on",
        fullScreen: "off",
        fullWidth: "off",
        fullScreenAlignForce: "off",
        onHoverStop: "on",
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 3,
        hideThumbsOnMobile: "off",
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResoluition: 0,
        hideThumbs: 0,
        navigationType: "bullet",
        navigationArrows: "solo",
        navigationStyle: "round",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 30,
        navigationVOffset: 30,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        touchenabled: "off",
        stopAtSlide: -1,
        stopAfterLoops: -1,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        hideSliderAtLimit: 0,
        dottedOverlay: "none",
        forceFullWidth: "off",
        shadow: 0
    });
	}
	
	$('.before-estimate .clickable').on("click", function (e) {
            if ($(this).hasClass('panel-collapsed','show')) {
               
            }
            else {
                // collapse the panel	
                $(this).parents('.panel').find('.panel-body').slideDown();
               
                $(".clickable").hide();
                
            }
        });
		$('.panel span.clickablee').on("click", function (e) {
            if ($('.panel').hasClass('panel-collapsed','loss')) {
				
               
            }
            else {
                // collapse the panel	
                $(this).parents('.panel').find('.panel-body').slideUp();
                $(".clickable").show();
               
                
            }
        });
		
		$('.pgwSlideshow').pgwSlideshow();

	$(document).ready(function() {
		$('.accordion .conn1').addClass('block-con');
		$('.accordion .ac1').addClass('active');
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .ac1').removeClass('active');
		$('.accordion .conn1').removeClass('block-con');
		 
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
			$(this).find('.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');
		}else {
			close_accordion_section();
		
			// Add active class to section title
			jQuery(this).addClass('active');
			$(this).find('.fa-caret-down').removeClass('fa-caret-down').addClass('fa-caret-up');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
			
		}

		e.preventDefault();
	});
});

$(document).ready(function(){
    $('.slide-down').toggle(function () {
    $(this).css('background-color', '#fff');
	$('.slide-down a').css('color', '#3498db');
}, function () {
    $(this).css('background-color', 'transparent');
	$('.slide-down a').css('color', '#fff');
}).click(function () {
    $('.navbar-drope').slideToggle();
});
});
(function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('hover', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});
})(jQuery);

$(document).ready(function(){
      $('.estimate-toggle').toggle(function () {
    $(this).css('background-color', '#fff');
	$('.slide-down a').css('color', '#3498db');
}, function () {
    $(this).css('background-color', 'transparent');
	$('.slide-down a').css('color', '#fff');
}).click(function () {
    $('.get-your-estimate').slideToggle();
});
	
});
	
});	
})(jQuery);	

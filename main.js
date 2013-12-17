jQuery(document).ready(function() {

	
	var i = 0 

	function imgCount() {

    	var n = jQuery('div#radSlider div').length;

    	return n;
    }

    function slideSwitch() {

    	if (i >= imgCount()) {

			i = 0 ; 

			jQuery('div#radSlider div:first-child').addClass('active');

		} else {

	    jQuery('div#radSlider div.active').removeClass('active').next('div').addClass('active');

	    }

	    i++;

    }

	setInterval(function() { slideSwitch();} , 5000);

	/* Navigation Bar Detach and Scroll */

	jQuery(window).scroll(function(){

    if  (jQuery(window).scrollTop() >= 201){

         jQuery('.menu-navigation-container').css({'position':'fixed','top':5,'max-width':'1176px','margin-left':'11px'});

    } else {

         jQuery('.menu-navigation-container').css({'position':'relative', 'top':0,'max-width':'none','margin':'inherit'});

        }
	});

/* loading-message */
	jQuery(window).load(function(){

    jQuery('#loader').fadeOut(500);

	});


});

 
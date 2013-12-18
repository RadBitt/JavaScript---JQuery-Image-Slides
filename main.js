jQuery(document).ready(function() {

	var i = 0 

	function imgCount() {

    	var n = jQuery('div#rad-slider div').length;

    	return n;
    }

    function imgSwitch() {

    	if (i >= imgCount()) {

			i = 0 ; 

			jQuery('div#rad-slider div:first-child').addClass('active');

		} else {

	    jQuery('div#rad-slider div.active').removeClass('active').next('div').addClass('active');

	    }

	    i++;

    }

	setInterval(function() { imgSwitch();} , 5000);

});

 
 $(function() {   
	 

	 // hover addClass SELECT*
    $(".menu-static ul > li").mouseover(function(event){
		$(this).addClass("select");  
    }).mouseout(function(event){
		$(this).removeClass("select");   
    }); 

	 // hover addClass SELECT*
    $("#menu ul li").mouseover(function(event){
		$('#menu  ul li ul').addClass("animated");  
    }).mouseout(function(event){
		$('#menu ul li ul').removeClass("animated");   
    }); 

	

	 // addClass after reflesh  SELECT*
	var url =  window.location.pathname;

	$( ".menu-static ul > li a" ).each(function( index, value ) {

		//depuração

		//console.log( url);

		if( $(this).children().attr("href") == url){ 
			$(this).children().addClass("select"); 
		} 
	});  
	
});


$(document).ready(function() {
	
	// inline SVG*
	$('img.svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');
			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Replace image with new SVG
			$img.replaceWith($svg);
		});
	});
	
	
	 
	// addClass rolagem Custom*
	var nav = $('.menu-static');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			nav.addClass("fixoActive fadeInDown");
		} else {
			nav.removeClass("fixoActive fadeInDown");
		}
	}); 
});
	
	

 
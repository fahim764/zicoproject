(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		// Progress_Bar

		$('#web-degine').LineProgressbar({
			percentage:80,
			radius: '50px',
			height: '8px',
			});
			
			$('#development').LineProgressbar({
			percentage:60,
			radius: '50px',
			height: '8px',
			fillBackgroundColor: '#DA4453'
			});
			
			$('#brandings').LineProgressbar({
			percentage:40,
			radius: '50px',
			height: '8px',
			fillBackgroundColor: '#E0C341'
			});

			$('#code').LineProgressbar({
			percentage:75,
			radius: '50px',
			height: '8px',
			fillBackgroundColor: '#E0C341'
			});

			// Counter

			$('#count-box1').CountUpCircle({
				duration: 2000,
				opacity_anim: true,
				step_divider: 4
			});

			$('#count-box2').CountUpCircle({
				duration: 2000,
				opacity_anim: true,
				step_divider: 6
			});

			$('#count-box3').CountUpCircle({
				duration: 2000,
				opacity_anim: true,
				step_divider: 10
			});

			$('#count-box4').CountUpCircle({
				duration: 2000,
				opacity_anim: true,
				step_divider: 100
			});

			// Flickty Carousel

			$('.main-carousel').flickity({				
				// options
				cellAlign: 'center',
				contain: true,
				groupCells: true,
				freeScroll: true,
				wrapAround: true,
				groupCells: 1,
				// groupCells: '100%',
			   autoPlay: false,
			   // autoPlay: 1500,
			   pauseAutoPlayOnHover: false,
			   initialIndex: 1,
			   wrapAround: true,
			   prevNextButtons: true,
			   pageDots: true
			  });

			//   parallaxie

			$('.parallaxie').parallaxie({
				speed: 0.5,
				offset: 50,
			});

			// wow js

			new WOW().init();

			




		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);


(function() {
				
	var documentEl = $(document),
		parallaxBg = $('div.parallax-bg');
	
	documentEl.on('scroll', function() {
		var currScrollPos = documentEl.scrollTop();
		parallaxBg.css('background-position', '0 ' + -currScrollPos/4 + 'px');
	});
})();


window.addEventListener("resize", Resizewindow );
function Resizewindow(){
	var  dataSpyList = [].slice.call(document.querySelectorAll('[data-spy="scroll"]'));

	dataSpyList.forEach( function(dataSpyElement){
		bootstrap.ScrollSpy.getInstance (dataSpyElement).refresh()
	});
}



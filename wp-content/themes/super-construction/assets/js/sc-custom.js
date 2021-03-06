( function( $ ) {

	$(document).ready(function($){

		$("#home-page-widget-area .pt-testimonial-item-wrap").slick({
			dots: true,
			infinite: true,
			speed: 600,
			slidesToShow: 2,
			arrows:false,
			slidesToScroll: 2,
			autoplay:true,
			responsive: [
			  {
			    breakpoint: 1024,
			    settings: {
			      slidesToShow: 2,
			      slidesToScroll: 1,
			      arrows:false
			    }
			  },
			  {
			    breakpoint: 768,
			    settings: {
			      slidesToShow: 1,
			      slidesToScroll: 1,
			      arrows:false
			    }
			  }
			]
		});
		
		$('#main-nav').meanmenu({
                    meanMenuOpen: "<span></span><span></span><span></span>",
                    meanScreenWidth: "1051",
		});

		// Go to top.
		var $scroll_obj = $( '#btn-scrollup' );
		
		$( window ).scroll(function(){
			if ( $( this ).scrollTop() > 100 ) {
				$scroll_obj.fadeIn();
			} else {
				$scroll_obj.fadeOut();
			}
		});

		$scroll_obj.click(function(){
			$( 'html, body' ).animate( { scrollTop: 0 }, 600 );
			return false;
		});

		// Partners-slider

		  $('.pt-clients-wrap').slick({
		  dots: false,
		  infinite: true,
		  speed: 600,
		  slidesToShow: 5,
		  arrows:true,
		  slidesToScroll: 2,
		  autoplay:true,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		        arrows:false
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        arrows:false
		      }
		    },
		    {
		      breakpoint: 551,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        arrows:false
		      }
		    },
		    {
		      breakpoint: 479,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows:false
		      }
		    }
		  ]
		});

	});

} )( jQuery );
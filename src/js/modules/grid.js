import $ from "jquery";
import { debug } from "./debug";
import mixitup from 'mixitup';
import imagesLoaded from 'imagesloaded';
imagesLoaded.makeJQueryPlugin($);
// jQuery.ready(function() {
// 	console.log('add filterizr')
// 	require('filterizr');
// })

function grid() {
	let $grid = $('.portfolio-grid'),
	$gridItemImg = $('.portfolio-piece img'),
    $gridItem = $('.portfolio-piece'),
    $gridExpansions = $('.portfolio-piece-expansion'),
    $overlayClose = $('.overlay-close'),
    $overlay = $('.overlay'),
    $overlayContent = $('.overlay-content'),
    $body = $('body'),
    $html = $('html');

    if ($grid.length > 0) {
      debug('Initiate Grid', 'success');

	   let mixer = mixitup($grid, {
    	   selectors: {
        	   target: '.portfolio-piece'
    	   },
    	   animation: {
        	   duration: 500
    	   }
	   });

        $gridItem.click(function(e) {
            e.preventDefault();
            //remove currecnt active states
            $gridItem.removeClass('active');
            $(this).addClass('active');

            let newHTML = $(this).find('.portfolio-piece-expansion').html();

            $overlay.addClass('active')
            $overlayContent.html(`<div class="container">${newHTML}</div>`);
            $html.addClass('noscroll')
        });

        $overlayClose.click(function() {
            $gridItem.removeClass('active');
            $overlay.removeClass('active')
            $overlayContent.html('');
            $html.removeClass('noscroll')
        });



        $grid.imagesLoaded(function() {
            debug('Grid images loaded');
        })
    }
}

export { grid };
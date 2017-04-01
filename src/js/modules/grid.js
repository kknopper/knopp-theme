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
	$gridItem = $('.portfolio-piece'),
    $gridExpansions = $('.portfolio-piece-expansion');

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
        })

        $grid.imagesLoaded(function() {
            debug('Grid images loaded');
        })
    }
}

export { grid };
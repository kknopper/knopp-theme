import $ from "jquery";
import { debug } from "./debug";

import mixitup from 'mixitup';
// jQuery.ready(function() {
// 	console.log('add filterizr')
// 	require('filterizr');
// })

function grid() {
	let $grid = $('.portfolio-grid'),
	$gridItem = $('.portfolio-piece')

	debug('Initiate Grid', 'success');

	let mixer = mixitup($grid, {
    	selectors: {
        	target: '.portfolio-piece'
    	},
    	animation: {
        	duration: 500
    	}
	});
}

export { grid };